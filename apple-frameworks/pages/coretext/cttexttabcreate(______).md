> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/cttexttabcreate(_:_:_:)](https://developer.apple.com/documentation/coretext/cttexttabcreate(_:_:_:))

# CTTextTabCreate(\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and initializes a new text tab object.

## Declaration

```swift
func CTTextTabCreate(_ alignment: CTTextAlignment, _ location: Double, _ options: CFDictionary?) -> CTTextTab
```

## Parameters

- `alignment`: The tab’s alignment. This is used to determine the position of text inside the tab column. This parameter must be set to a valid [CTTextAlignment](cttextalignment.md) value or this function returns `NULL`.
- `location`: The tab’s ruler location, relative to the back margin.
- `options`: Options to pass in when the tab is created. Currently, the only option available is [kCTTabColumnTerminatorsAttributeName](kcttabcolumnterminatorsattributename.md). This parameter is optional and can be set to `NULL` if not needed.

<a id="return-value"></a>

## Return Value

A reference to a CTTextTab object if the call was successful; otherwise, `NULL`.

## See Also

### Creating Text Tabs

- [kCTTabColumnTerminatorsAttributeName](kcttabcolumnterminatorsattributename.md): Specifies the terminating character for a tab column.

# CTTextTabCreate (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and initializes a new text tab object.

## Declaration

```objectivec
extern CTTextTabRefCTTextTabCreate(CTTextAlignment alignment, double location, CFDictionaryRef options);
```

## Parameters

- `alignment`: The tab’s alignment. This is used to determine the position of text inside the tab column. This parameter must be set to a valid [CTTextAlignment](cttextalignment.md) value or this function returns `NULL`.
- `location`: The tab’s ruler location, relative to the back margin.
- `options`: Options to pass in when the tab is created. Currently, the only option available is [kCTTabColumnTerminatorsAttributeName](kcttabcolumnterminatorsattributename.md). This parameter is optional and can be set to `NULL` if not needed.

<a id="return-value"></a>

## Return Value

A reference to a CTTextTab object if the call was successful; otherwise, `NULL`.

## See Also

### Creating Text Tabs

- [kCTTabColumnTerminatorsAttributeName](kcttabcolumnterminatorsattributename.md): Specifies the terminating character for a tab column.
