> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibmediaitem/location](https://developer.apple.com/documentation/ituneslibrary/itlibmediaitem/location)

# location (Swift)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

The location of the media item on disk.

## Declaration

```swift
var location: URL? { get }
```

<a id="Discussion"></a>

## Discussion

If the location of the media item isn’t available, this property returns [ITLibMediaItemLocationType.unknown](../itlibmediaitemlocationtype/unknown.md).

This method returns URLs that are outside of the default sandbox. To use the iTunesLibrary framework, a sandboxed app must have the [com.apple.security.assets.music.read-write](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.security.assets.music.read-write) or [com.apple.security.assets.music.read-only](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.security.assets.music.read-only) entitlement.

To access the media item file in a sandboxed app, call [startAccessingSecurityScopedResource()](https://developer.apple.com/documentation/foundation/nsurl/startaccessingsecurityscopedresource%28%29).

Listing 1.

```objc
#import <iTunesLibrary/ITLibrary.h>
#import <iTunesLibrary/ITLibMediaItem.h>
 
// Initialize
    NSError * error = nil;
    ITLibrary* library =
        [[ITLibrary alloc] initWithAPIVersion:@"1.0" error:&error];
    if (library)
    {
        // Get first media item in the library
        NSArray * mediaItems = library.allMediaItems;
        if (mediaItems.count > 0)
        {
            // Get the location (URL) of the first media item and
            // prepare it for file read/write access.
            ITLibMediaItem * mediaItem =
                (ITLibMediaItem*)[mediaItems objectAtIndex:0];
            NSURL * mediaItemLocation = mediaItem.location;
 
            if (mediaItemLocation &&
                [mediaItemLocation startAccessingSecurityScopedResource])
            {
                // mediaItemLocation can be now used to read/write
                // the media file
                [mediaItemLocation stopAccessingSecurityScopedResource];
            }
        }
    }
```

For more information about using URLs that are outside the default sandbox from a sandboxed app, see [Security-Scoped Bookmarks and Persistent Resource Access](https://developer.apple.com/library/archive/documentation/Security/Conceptual/AppSandboxDesignGuide/AppSandboxInDepth/AppSandboxInDepth.html#//apple_ref/doc/uid/TP40011183-CH3-SW16).

In nonsandboxed apps, you can use the returned location URL to access the media item file directly.

## See Also

### Getting Media Item Info

- [title](title.md): The title of the media item.
- [sortTitle](sorttitle.md): The title of the media item to use when sorting.
- [artist](artist.md): Information about the artist that iTunes associates with the media item.
- [composer](composer.md): The name of the composer that iTunes associates with the media item.
- [sortComposer](sortcomposer.md): The name to use when sorting by composer.
- [rating](rating.md): The rating of the media item.
- [isRatingComputed](isratingcomputed.md): A Boolean value that indicates whether iTunes computes the media item’s rating from its album rating.
- [startTime](starttime.md): If nonzero, the actual time playback of the media item starts instead of 0:00 (in milliseconds).
- [stopTime](stoptime.md): If nonzero, the actual time playback of the media item stops versus the total time (in milliseconds).
- [album](album.md): The album of the media item.
- [genre](genre.md): The genre of the media item, if any.
- [kind](kind.md): The kind of media item file, such as an MPEG audio file.
- [mediaKind](mediakind.md): The kind of media item.
- [totalTime](totaltime.md): The length of the media item in milliseconds.
- [trackNumber](tracknumber.md): The position of the media item within its album.

# location (Objective-C)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

The location of the media item on disk.

## Declaration

```objectivec
@property (nonatomic, retain, readonly, nullable) NSURL * location;
```

<a id="Discussion"></a>

## Discussion

If the location of the media item isn’t available, this property returns [ITLibMediaItemLocationTypeUnknown](../itlibmediaitemlocationtype/unknown.md).

This method returns URLs that are outside of the default sandbox. To use the iTunesLibrary framework, a sandboxed app must have the [com.apple.security.assets.music.read-write](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.security.assets.music.read-write) or [com.apple.security.assets.music.read-only](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.security.assets.music.read-only) entitlement.

To access the media item file in a sandboxed app, call [startAccessingSecurityScopedResource](https://developer.apple.com/documentation/foundation/nsurl/startaccessingsecurityscopedresource%28%29).

Listing 1.

```objc
#import <iTunesLibrary/ITLibrary.h>
#import <iTunesLibrary/ITLibMediaItem.h>
 
// Initialize
    NSError * error = nil;
    ITLibrary* library =
        [[ITLibrary alloc] initWithAPIVersion:@"1.0" error:&error];
    if (library)
    {
        // Get first media item in the library
        NSArray * mediaItems = library.allMediaItems;
        if (mediaItems.count > 0)
        {
            // Get the location (URL) of the first media item and
            // prepare it for file read/write access.
            ITLibMediaItem * mediaItem =
                (ITLibMediaItem*)[mediaItems objectAtIndex:0];
            NSURL * mediaItemLocation = mediaItem.location;
 
            if (mediaItemLocation &&
                [mediaItemLocation startAccessingSecurityScopedResource])
            {
                // mediaItemLocation can be now used to read/write
                // the media file
                [mediaItemLocation stopAccessingSecurityScopedResource];
            }
        }
    }
```

For more information about using URLs that are outside the default sandbox from a sandboxed app, see [Security-Scoped Bookmarks and Persistent Resource Access](https://developer.apple.com/library/archive/documentation/Security/Conceptual/AppSandboxDesignGuide/AppSandboxInDepth/AppSandboxInDepth.html#//apple_ref/doc/uid/TP40011183-CH3-SW16).

In nonsandboxed apps, you can use the returned location URL to access the media item file directly.

## See Also

### Getting Media Item Info

- [title](title.md): The title of the media item.
- [sortTitle](sorttitle.md): The title of the media item to use when sorting.
- [artist](artist.md): Information about the artist that iTunes associates with the media item.
- [composer](composer.md): The name of the composer that iTunes associates with the media item.
- [sortComposer](sortcomposer.md): The name to use when sorting by composer.
- [rating](rating.md): The rating of the media item.
- [ratingComputed](isratingcomputed.md): A Boolean value that indicates whether iTunes computes the media item’s rating from its album rating.
- [startTime](starttime.md): If nonzero, the actual time playback of the media item starts instead of 0:00 (in milliseconds).
- [stopTime](stoptime.md): If nonzero, the actual time playback of the media item stops versus the total time (in milliseconds).
- [album](album.md): The album of the media item.
- [genre](genre.md): The genre of the media item, if any.
- [kind](kind.md): The kind of media item file, such as an MPEG audio file.
- [mediaKind](mediakind.md): The kind of media item.
- [totalTime](totaltime.md): The length of the media item in milliseconds.
- [trackNumber](tracknumber.md): The position of the media item within its album.
