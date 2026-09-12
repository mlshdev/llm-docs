> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediaselectiongroup/options](https://developer.apple.com/documentation/avfoundation/avmediaselectiongroup/options)

# options (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A collection of mutually exclusive media selection options

## Declaration

```swift
var options: [AVMediaSelectionOption] { get }
```

<a id="Discussion"></a>

## Discussion

The value of the property is an array of [AVMediaSelectionOption](../avmediaselectionoption.md) objects.

## See Also

### Accessing media selection options

- [mediaSelectionOption(withPropertyList:)](mediaselectionoption%28withpropertylist_%29.md): Returns the media selection options that match the given property list.
- [defaultOption](defaultoption.md): The default option in the group.

# options (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A collection of mutually exclusive media selection options

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVMediaSelectionOption *> * options;
```

<a id="Discussion"></a>

## Discussion

The value of the property is an array of [AVMediaSelectionOption](../avmediaselectionoption.md) objects.

## See Also

### Accessing media selection options

- [mediaSelectionOptionWithPropertyList:](mediaselectionoption%28withpropertylist_%29.md): Returns the media selection options that match the given property list.
- [defaultOption](defaultoption.md): The default option in the group.
