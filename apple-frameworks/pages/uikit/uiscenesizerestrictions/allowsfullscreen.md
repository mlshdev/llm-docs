> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiscenesizerestrictions/allowsfullscreen

# allowsFullScreen (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 16.0+ · tvOS 13.0+ · visionOS 1.0+

A Boolean value that indicates whether the scene can appear full screen.

## Declaration

```swift
var allowsFullScreen: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The system only checks the value of this property in Mac Catalyst apps.

## See Also

### Setting the size restrictions

- [minimumSize](minimumsize.md): The minimum width and height supported by your app’s windows.
- [maximumSize](maximumsize.md): The maximum width and height supported by your app’s windows.

# allowsFullScreen (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 16.0+ · tvOS 13.0+ · visionOS 1.0+

A Boolean value that indicates whether the scene can appear full screen.

## Declaration

```objectivec
@property (nonatomic) BOOL allowsFullScreen;
```

<a id="discussion"></a>

## Discussion

The system only checks the value of this property in Mac Catalyst apps.

## See Also

### Setting the size restrictions

- [minimumSize](minimumsize.md): The minimum width and height supported by your app’s windows.
- [maximumSize](maximumsize.md): The maximum width and height supported by your app’s windows.
