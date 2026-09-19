> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avplaybackspeed/localizednumericname

# localizedNumericName (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A localized numeric name for a speed that’s suitable for display in a user interface.

## Declaration

```swift
var localizedNumericName: String { get }
```

<a id="Discussion"></a>

## Discussion

Use this value to represent the speed in a user interface where limited space is available. Represent the speed using its [localizedName](localizedname.md) value where space allows.

## See Also

### Inspecting speed details

- [rate](rate.md): The playback rate to use when you select this speed.
- [localizedName](localizedname.md): A localized name for a speed that’s suitable for display in a user interface.

# localizedNumericName (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A localized numeric name for a speed that’s suitable for display in a user interface.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * localizedNumericName;
```

<a id="Discussion"></a>

## Discussion

Use this value to represent the speed in a user interface where limited space is available. Represent the speed using its [localizedName](localizedname.md) value where space allows.

## See Also

### Inspecting speed details

- [rate](rate.md): The playback rate to use when you select this speed.
- [localizedName](localizedname.md): A localized name for a speed that’s suitable for display in a user interface.
