> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfpropertylistisvalid(_:_:)](https://developer.apple.com/documentation/corefoundation/cfpropertylistisvalid(_:_:))

# CFPropertyListIsValid(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Determines if a property list is valid.

## Declaration

```swift
func CFPropertyListIsValid(_ plist: CFPropertyList!, _ format: CFPropertyListFormat) -> Bool
```

## Parameters

- `plist`: The property list to validate.
- `format`: A constant that specifies the allowable format of `plist`. See [CFPropertyListFormat](cfpropertylistformat.md) for possible values.

<a id="return-value"></a>

## Return Value

`true` if the object graph rooted at `plist` is a valid property list graph—that is, the property list contains no cycles, only contains property list objects, and all dictionary keys are strings; otherwise `false`.

<a id="Discussion"></a>

## Discussion

The debugging library version of this function prints out some useful messages.

# CFPropertyListIsValid (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Determines if a property list is valid.

## Declaration

```objectivec
extern Boolean CFPropertyListIsValid(CFPropertyListRef plist, CFPropertyListFormat format);
```

## Parameters

- `plist`: The property list to validate.
- `format`: A constant that specifies the allowable format of `plist`. See [CFPropertyListFormat](cfpropertylistformat.md) for possible values.

<a id="return-value"></a>

## Return Value

`true` if the object graph rooted at `plist` is a valid property list graph—that is, the property list contains no cycles, only contains property list objects, and all dictionary keys are strings; otherwise `false`.

<a id="Discussion"></a>

## Discussion

The debugging library version of this function prints out some useful messages.
