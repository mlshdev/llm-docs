> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avtextstylerule/propertylist(for:)](https://developer.apple.com/documentation/avfoundation/avtextstylerule/propertylist(for:))

# propertyList(for:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Converts one or more text style rules into a serializable property list object.

## Declaration

```swift
class func propertyList(for textStyleRules: [AVTextStyleRule]) -> Any
```

## Parameters

- `textStyleRules`: An array of `AVTextStyleRule` objects to write to the property list.

<a id="return-value"></a>

## Return Value

A property-list object that you can pass to the [PropertyListSerialization](../../foundation/propertylistserialization.md) serialization routines.

<a id="Discussion"></a>

## Discussion

The property-list object returned by this method can be written to disk and stored persistently.

# propertyListForTextStyleRules: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Converts one or more text style rules into a serializable property list object.

## Declaration

```objectivec
+ (id) propertyListForTextStyleRules:(NSArray<AVTextStyleRule *> *) textStyleRules;
```

## Parameters

- `textStyleRules`: An array of `AVTextStyleRule` objects to write to the property list.

<a id="return-value"></a>

## Return Value

A property-list object that you can pass to the [NSPropertyListSerialization](../../foundation/propertylistserialization.md) serialization routines.

<a id="Discussion"></a>

## Discussion

The property-list object returned by this method can be written to disk and stored persistently.
