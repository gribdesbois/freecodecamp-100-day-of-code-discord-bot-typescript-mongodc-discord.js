import CamperModel from '../database/models/CamperModel'

export const getCamperData = async (id: string) => {
  const camperData =
    (await CamperModel.findOne({ id })) ||
    (await CamperModel.create({
      discordId: id, // fallback value if bot is being used for the first time
      round: 1,
      day: 0,
      date: Date.now(),
    }))
  return camperData
}
