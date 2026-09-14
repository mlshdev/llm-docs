> Snapshot-pinned source payload for Apple watchOS snapshot-2bb3946a9b15; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/watchkit/wkaudiofileplayeritem/asset

# asset (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

The audio file asset being managed.

## Declaration

```swift
var asset: WKAudioFileAsset { get }
```

<a id="Discussion"></a>

## Discussion

This property is initialized with the asset you specified at creation time. You may access this property at any time regardless of the current status of the player item.

## See Also

### Getting Information About the Item

- [status](status.md): Deprecated. The status of the player item.
- [error](error.md): Deprecated. An error that describes the cause of a failure.

# asset (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 6.0)

The audio file asset being managed.

## Declaration

```objectivec
@property (nonatomic, readonly) WKAudioFileAsset * asset;
```

<a id="Discussion"></a>

## Discussion

This property is initialized with the asset you specified at creation time. You may access this property at any time regardless of the current status of the player item.

## See Also

### Getting Information About the Item

- [status](status.md): Deprecated. The status of the player item.
- [error](error.md): Deprecated. An error that describes the cause of a failure.
