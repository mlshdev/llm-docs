> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediaselectionoption/propertylist()](https://developer.apple.com/documentation/avfoundation/avmediaselectionoption/propertylist())

# propertyList() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a serializable property list that’s sufficient to identify the option within its group.

## Declaration

```swift
func propertyList() -> Any
```

<a id="return-value"></a>

## Return Value

A serializable property list that you can use to obtain an instance of [AVMediaSelectionOption](../avmediaselectionoption.md) representing the same option as the receiver using [mediaSelectionOption(withPropertyList:)](../avmediaselectiongroup/mediaselectionoption%28withpropertylist_%29.md).

<a id="Discussion"></a>

## Discussion

You can serialize the returned property list using [PropertyListSerialization](../../foundation/propertylistserialization.md).

# propertyList (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a serializable property list that’s sufficient to identify the option within its group.

## Declaration

```objectivec
- (id) propertyList;
```

<a id="return-value"></a>

## Return Value

A serializable property list that you can use to obtain an instance of [AVMediaSelectionOption](../avmediaselectionoption.md) representing the same option as the receiver using [mediaSelectionOptionWithPropertyList:](../avmediaselectiongroup/mediaselectionoption%28withpropertylist_%29.md).

<a id="Discussion"></a>

## Discussion

You can serialize the returned property list using [NSPropertyListSerialization](../../foundation/propertylistserialization.md).
