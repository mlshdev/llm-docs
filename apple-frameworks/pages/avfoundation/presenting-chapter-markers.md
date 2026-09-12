> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/presenting-chapter-markers](https://developer.apple.com/documentation/avfoundation/presenting-chapter-markers)

# Presenting chapter markers (Swift)

**Framework:** AVFoundation  
**Kind:** Article

Add chapter markers to enable users to quickly navigate your content.

<a id="overview"></a>

## Overview

Chapter markers enable users to quickly navigate your content. [AVPlayerViewController](../avkit/avplayerviewcontroller.md) automatically presents a chapter-selection interface if it finds chapter markers in the currently played asset. You can also directly retrieve this data whenever you want to create your own custom chapter-selection interface.

<a id="Retrieve-the-timed-metadata"></a>

### Retrieve the timed metadata

Chapter markers are a type of timed metadata that apply only to ranges of time within the asset’s timeline. You retrieve an asset’s chapter metadata using either the [chapterMetadataGroups(bestMatchingPreferredLanguages:)](avasset/chaptermetadatagroups%28bestmatchingpreferredlanguages_%29.md) or [chapterMetadataGroups(withTitleLocale:containingItemsWithCommonKeys:)](avasset/chaptermetadatagroups%28withtitlelocale_containingitemswithcommonkeys_%29.md) methods. These methods become callable without blocking after you asynchronously load the value of the asset’s [availableChapterLocales](avasset/availablechapterlocales.md) key.

```swift
let asset = AVAsset(url: <# Asset URL #>)
let chapterLocalesKey = "availableChapterLocales"
 
asset.loadValuesAsynchronously(forKeys: [chapterLocalesKey]) {
    var error: NSError?
    let status = asset.statusOfValue(forKey: chapterLocalesKey, error: &error)
    if status == .loaded {
        let languages = Locale.preferredLanguages
        let chapterMetadata = asset.chapterMetadataGroups(bestMatchingPreferredLanguages: languages)
        // Process chapter metadata.
    }
    else {
        // Handle other status cases.
    }
}
```

<a id="Convert-timed-metadata-into-chapter-data"></a>

### Convert timed metadata into chapter data

The value returned from the methods described above is an array of [AVTimedMetadataGroup](avtimedmetadatagroup.md) objects, each representing an individual chapter marker. An [AVTimedMetadataGroup](avtimedmetadatagroup.md) object contains a [CMTimeRange](../coremedia/cmtimerange.md), defining the time range to which its metadata applies, an array of [AVMetadataItem](avmetadataitem.md) objects representing the chapter’s title, and optionally, its thumbnail image. The following example shows how to convert the [AVTimedMetadataGroup](avtimedmetadatagroup.md) data into an array of custom model objects, called `Chapter`, to pass to the app’s view layer.

```swift
func convertTimedMetadataGroupsToChapters(groups: [AVTimedMetadataGroup]) -> [Chapter] {
    return groups.map { group in
        // Retrieve the title metadata items.
        let titleItems = AVMetadataItem.metadataItems(from: group.items,
                                                      filteredByIdentifier: .commonIdentifierTitle)

        // Retrieve the artwork metadata items.
        let artworkItems = AVMetadataItem.metadataItems(from: group.items,
                                                        filteredByIdentifier: .commonIdentifierArtwork)

        var title = "Default Title"
        var image = UIImage(named: "placeholder")!

        if let titleValue = titleItems.first?.stringValue {
            title = titleValue
        }

        if let imgData = artworkItems.first?.dataValue, let imageValue = UIImage(data: imgData) {
            image = imageValue
        }

        return Chapter(time: group.timeRange.start, title: title, image: image)
    }
}
```

With the relevant data converted, you can build a chapter-selection interface and use the time value of the chapter object to seek the current presentation using an [AVPlayer](avplayer.md) object’s [seek(to:)](avplayer/seek%28to_%29-87h2r.md) method.

## See Also

### Timed metadata

- [AVMetadataGroup](avmetadatagroup.md): A collection of metadata items associated with a timeline segment.
- [AVTimedMetadataGroup](avtimedmetadatagroup.md): A collection of metadata items that are valid for use during a specific time range.
- [AVMutableTimedMetadataGroup](avmutabletimedmetadatagroup.md): A mutable collection of metadata items that are valid for use during a specific time range.
- [AVDateRangeMetadataGroup](avdaterangemetadatagroup.md): A collection of metadata items that are valid for use within a specific date range.
- [AVMutableDateRangeMetadataGroup](avmutabledaterangemetadatagroup.md): A mutable collection of metadata items that are valid for use within a specific range of dates.
- [AVPlayerItemMediaDataCollector](avplayeritemmediadatacollector.md): The abstract base for media data collectors.
- [AVPlayerItemMetadataCollector](avplayeritemmetadatacollector.md): An object used to capture the date range metadata defined for an HTTP Live Streaming asset.

# Presenting chapter markers (Objective-C)

**Framework:** AVFoundation  
**Kind:** Article

Add chapter markers to enable users to quickly navigate your content.

<a id="overview"></a>

## Overview

Chapter markers enable users to quickly navigate your content. [AVPlayerViewController](../avkit/avplayerviewcontroller.md) automatically presents a chapter-selection interface if it finds chapter markers in the currently played asset. You can also directly retrieve this data whenever you want to create your own custom chapter-selection interface.

<a id="Retrieve-the-timed-metadata"></a>

### Retrieve the timed metadata

Chapter markers are a type of timed metadata that apply only to ranges of time within the asset’s timeline. You retrieve an asset’s chapter metadata using either the [chapterMetadataGroupsBestMatchingPreferredLanguages:](avasset/chaptermetadatagroups%28bestmatchingpreferredlanguages_%29.md) or [chapterMetadataGroupsWithTitleLocale:containingItemsWithCommonKeys:](avasset/chaptermetadatagroups%28withtitlelocale_containingitemswithcommonkeys_%29.md) methods. These methods become callable without blocking after you asynchronously load the value of the asset’s [availableChapterLocales](avasset/availablechapterlocales.md) key.

```swift
let asset = AVAsset(url: <# Asset URL #>)
let chapterLocalesKey = "availableChapterLocales"
 
asset.loadValuesAsynchronously(forKeys: [chapterLocalesKey]) {
    var error: NSError?
    let status = asset.statusOfValue(forKey: chapterLocalesKey, error: &error)
    if status == .loaded {
        let languages = Locale.preferredLanguages
        let chapterMetadata = asset.chapterMetadataGroups(bestMatchingPreferredLanguages: languages)
        // Process chapter metadata.
    }
    else {
        // Handle other status cases.
    }
}
```

<a id="Convert-timed-metadata-into-chapter-data"></a>

### Convert timed metadata into chapter data

The value returned from the methods described above is an array of [AVTimedMetadataGroup](avtimedmetadatagroup.md) objects, each representing an individual chapter marker. An [AVTimedMetadataGroup](avtimedmetadatagroup.md) object contains a [CMTimeRange](../coremedia/cmtimerange.md), defining the time range to which its metadata applies, an array of [AVMetadataItem](avmetadataitem.md) objects representing the chapter’s title, and optionally, its thumbnail image. The following example shows how to convert the [AVTimedMetadataGroup](avtimedmetadatagroup.md) data into an array of custom model objects, called `Chapter`, to pass to the app’s view layer.

```swift
func convertTimedMetadataGroupsToChapters(groups: [AVTimedMetadataGroup]) -> [Chapter] {
    return groups.map { group in
        // Retrieve the title metadata items.
        let titleItems = AVMetadataItem.metadataItems(from: group.items,
                                                      filteredByIdentifier: .commonIdentifierTitle)

        // Retrieve the artwork metadata items.
        let artworkItems = AVMetadataItem.metadataItems(from: group.items,
                                                        filteredByIdentifier: .commonIdentifierArtwork)

        var title = "Default Title"
        var image = UIImage(named: "placeholder")!

        if let titleValue = titleItems.first?.stringValue {
            title = titleValue
        }

        if let imgData = artworkItems.first?.dataValue, let imageValue = UIImage(data: imgData) {
            image = imageValue
        }

        return Chapter(time: group.timeRange.start, title: title, image: image)
    }
}
```

With the relevant data converted, you can build a chapter-selection interface and use the time value of the chapter object to seek the current presentation using an [AVPlayer](avplayer.md) object’s [seekToTime:](avplayer/seek%28to_%29-87h2r.md) method.

## See Also

### Timed metadata

- [AVMetadataGroup](avmetadatagroup.md): A collection of metadata items associated with a timeline segment.
- [AVTimedMetadataGroup](avtimedmetadatagroup.md): A collection of metadata items that are valid for use during a specific time range.
- [AVMutableTimedMetadataGroup](avmutabletimedmetadatagroup.md): A mutable collection of metadata items that are valid for use during a specific time range.
- [AVDateRangeMetadataGroup](avdaterangemetadatagroup.md): A collection of metadata items that are valid for use within a specific date range.
- [AVMutableDateRangeMetadataGroup](avmutabledaterangemetadatagroup.md): A mutable collection of metadata items that are valid for use within a specific range of dates.
- [AVPlayerItemMediaDataCollector](avplayeritemmediadatacollector.md): The abstract base for media data collectors.
- [AVPlayerItemMetadataCollector](avplayeritemmetadatacollector.md): An object used to capture the date range metadata defined for an HTTP Live Streaming asset.
