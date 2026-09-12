> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediaselectiongroup/mediaselectionoption(withpropertylist:)](https://developer.apple.com/documentation/avfoundation/avmediaselectiongroup/mediaselectionoption(withpropertylist:))

# mediaSelectionOption(withPropertyList:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the media selection options that match the given property list.

## Declaration

```swift
func mediaSelectionOption(withPropertyList plist: Any) -> AVMediaSelectionOption?
```

## Parameters

- `plist`: A property list previously obtained from an option in the group using [propertyList()](../avmediaselectionoption/propertylist%28%29.md) (`AVMediaSelectionOption`).

<a id="return-value"></a>

## Return Value

An [AVMediaSelectionOption](../avmediaselectionoption.md) object containing the properites passed by `plist`. Returns `nil` when no match is found.

## See Also

### Accessing media selection options

- [options](options.md): A collection of mutually exclusive media selection options
- [defaultOption](defaultoption.md): The default option in the group.

# mediaSelectionOptionWithPropertyList: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the media selection options that match the given property list.

## Declaration

```objectivec
- (AVMediaSelectionOption *) mediaSelectionOptionWithPropertyList:(id) plist;
```

## Parameters

- `plist`: A property list previously obtained from an option in the group using [propertyList](../avmediaselectionoption/propertylist%28%29.md) (`AVMediaSelectionOption`).

<a id="return-value"></a>

## Return Value

An [AVMediaSelectionOption](../avmediaselectionoption.md) object containing the properites passed by `plist`. Returns `nil` when no match is found.

## See Also

### Accessing media selection options

- [options](options.md): A collection of mutually exclusive media selection options
- [defaultOption](defaultoption.md): The default option in the group.
