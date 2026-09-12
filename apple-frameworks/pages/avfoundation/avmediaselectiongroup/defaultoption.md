> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediaselectiongroup/defaultoption](https://developer.apple.com/documentation/avfoundation/avmediaselectiongroup/defaultoption)

# defaultOption (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The default option in the group.

## Declaration

```swift
var defaultOption: AVMediaSelectionOption? { get }
```

<a id="Discussion"></a>

## Discussion

The default option is intended for use in the absence of a specific end-user selection or preference. Can be `nil`, indicating that without a specific end-user selection or preference, no option in the group is intended to be selected.

## See Also

### Accessing media selection options

- [options](options.md): A collection of mutually exclusive media selection options
- [mediaSelectionOption(withPropertyList:)](mediaselectionoption%28withpropertylist_%29.md): Returns the media selection options that match the given property list.

# defaultOption (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The default option in the group.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVMediaSelectionOption * defaultOption;
```

<a id="Discussion"></a>

## Discussion

The default option is intended for use in the absence of a specific end-user selection or preference. Can be `nil`, indicating that without a specific end-user selection or preference, no option in the group is intended to be selected.

## See Also

### Accessing media selection options

- [options](options.md): A collection of mutually exclusive media selection options
- [mediaSelectionOptionWithPropertyList:](mediaselectionoption%28withpropertylist_%29.md): Returns the media selection options that match the given property list.
