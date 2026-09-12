> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/integrating-carplay-with-your-music-app](https://developer.apple.com/documentation/carplay/integrating-carplay-with-your-music-app)

# Integrating CarPlay with Your Music App

**Interface languages:** Swift, Objective-C

**Framework:** CarPlay  
**Kind:** Sample Code  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · Xcode 15.0+

Configure your music app to work with CarPlay by displaying a custom UI.

<a id="Overview"></a>

## Overview

CarPlay Music is a sample music app that demonstrates how to display a custom UI from a CarPlay–enabled vehicle. CarPlay Music integrates with the CarPlay framework by implementing the  [`CPNowPlayingTemplate`](cpnowplayingtemplate.md) and [`CPListTemplate`](cplisttemplate.md). This sample’s iOS app component provides a logging interface to help you understand the life cycle of a CarPlay app, as well as a music controller.

<a id="Configure-the-Sample-Code-Project"></a>

### Configure the Sample Code Project

To configure the sample code project, perform the following:

1. Complete the steps in [Requesting CarPlay Entitlements](requesting-carplay-entitlements.md) to request the CarPlay audio entitlement and configure the Xcode project.
2. Create a key and developer token for the [MusicKit](https://developer.apple.com/musickit) service. For more information, see [Getting Keys and Creating Tokens](https://developer.apple.com/documentation/applemusicapi/generating-developer-tokens).
3. Update the `developerToken` variable in the `AppleMusicAPIController.swift` file to use the developer token you create.

<a id="Handle-Communication-with-CarPlay"></a>

### Handle Communication with CarPlay

The app is responsible for adding and removing the root view controller of the CarPlay window in response to connections and disconnections.

The following code shows an example implementation of setting a root template:

```swift
var tabTemplates = [CPTemplate]()

if let playlists = MediaPlayerUtilities.searchForPlaylistsInLocalLibrary(withPredicate: nil) {
    
    let listItems = playlists.compactMap { (playlist) -> CPListItem? in
        let listItem = CPListItem(text: playlist.name, detailText: "")
        listItem.handler = { playlistItem, completion in
            AppleMusicAPIController.playWithItems(items: playlist.items.compactMap({ (item) -> String? in
                return item.playbackStoreID
            }))
            completion()
        }
        return listItem
    }
    
    var playlistTemplate: CPListTemplate!
    
    if #available(iOS 15.0, *) {
        let configuration = CPAssistantCellConfiguration(
                            position: .top,
                            visibility: .always,
                            assistantAction: .playMedia)
        playlistTemplate = CPListTemplate(
                            title: "Playlists",
                            sections: [CPListSection(items: listItems)],
                            assistantCellConfiguration: configuration)
                        
    } else {
        playlistTemplate = CPListTemplate(
                            title: "Playlists",
                            sections: [CPListSection(items: listItems)])
                        
    }
    
    playlistTemplate.tabImage = UIImage(systemName: "list.star")
    
    tabTemplates.append(playlistTemplate)
}

tabTemplates.append(genresTemplate())
tabTemplates.append(settingsTemplate())

self.carplayInterfaceController!.delegate = self
self.carplayInterfaceController!.setRootTemplate(CPTabBarTemplate(templates: tabTemplates), animated: true, completion: nil)
```

<a id="Prepare-for-App-Selection"></a>

### Prepare for App Selection

Like other Music apps, CarPlay Music is eligible to participate in App Selection to improve its interactions with Siri. This allows the system to automatically select the app for playing music on the device. See [`Improving Siri Media Interaction and App Selection`](https://developer.apple.com/documentation/sirikit/improving-siri-media-interactions-and-app-selection).

The following code demonstrates how to declare an app as eligible for App Selection:

```swift
let context = INMediaUserContext()
context.numberOfLibraryItems = MPMediaQuery.songs().items?.count
AppleMusicAPIController.sharedController.prepareForRequests { (success) in
    if success {
        context.subscriptionStatus = .subscribed
    } else {
        context.subscriptionStatus = .notSubscribed
    }
    context.becomeCurrent()
}
```

<a id="Listen-for-Changes-with-the-Music-Player"></a>

### Listen for Changes with the Music Player

A good way to ensure an app UI updates automatically in response to changes is to listen for changes in the Now Playing item, as well as in the playing state. CarPlay Music uses the `applicationMusicPlayer`, so it subscribes to the `MPMusicPlayerControllerPlaybackStateDidChange` and `MPMusicPlayerControllerNowPlayingItemDidChange` notifications.

```swift
self.playbackObserver = NotificationCenter.default.addObserver(
    forName: .MPMusicPlayerControllerPlaybackStateDidChange,
    object: nil,
    queue: .main) {
    notification in
    MemoryLogger.shared.appendEvent(
        "MPMusicPlayerControllerPlaybackStateDidChange: \(MPMusicPlayerController.applicationQueuePlayer.playbackState)")
}

self.nowPlayingItemObserver = NotificationCenter.default.addObserver(
    forName: .MPMusicPlayerControllerNowPlayingItemDidChange,
    object: nil,
    queue: .main) {
    notification in
    MemoryLogger.shared.appendEvent("MPMusicPlayerControllerNowPlayingItemDidChange")
}
```

## See Also

### Audio

- [CPNowPlayingTemplate](cpnowplayingtemplate.md): A shared system template that displays Now Playing information.
