// Torrent content layout: Original
// Default Torrent Management Mode: Automatic
// Default Save Path: /media/Downloads/complete
// Incomplete Save Path: /media/Downloads/incomplete

module.exports = {
  action: "inject",
  apiKey: process.env.CROSS_SEED_API_KEY,
  dataCategory: "cross-seed",
  delay: 15,
  duplicateCategories: true,
  includeEpisodes: true,
  includeNonVideos: true,
  includeSingleEpisodes: true,
  linkDir: "/media/Downloads/complete/cross-seed",
  linkType: "hardlink",
  matchMode: "safe",
  outputDir: "/config",
  qbittorrentUrl: "http://qbittorrent.media.svc.cluster.local",
  skipRecheck: true,
  torrentDir: "/config/qBittorrent/BT_backup",
  torznab: [], // Only using annoucements from autobrr
};
