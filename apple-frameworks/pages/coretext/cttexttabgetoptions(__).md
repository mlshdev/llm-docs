> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/cttexttabgetoptions(_:)](https://developer.apple.com/documentation/coretext/cttexttabgetoptions(_:))

# CTTextTabGetOptions(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the dictionary of attributes associated with the tab.

## Declaration

```swift
func CTTextTabGetOptions(_ tab: CTTextTab) -> CFDictionary?
```

## Parameters

- `tab`: The tab whose attributes are obtained.

<a id="return-value"></a>

## Return Value

The dictionary of attributes associated with the tab, or if no dictionary is present, `NULL`.

## See Also

### Getting Text Tab Data

- [CTTextTabGetAlignment(\_:)](cttexttabgetalignment%28__%29.md): Returns the text alignment of the tab.
- [CTTextTabGetLocation(\_:)](cttexttabgetlocation%28__%29.md): Returns the tab’s ruler location.

# CTTextTabGetOptions (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the dictionary of attributes associated with the tab.

## Declaration

```objectivec
extern CFDictionaryRefCTTextTabGetOptions(CTTextTabRef tab);
```

## Parameters

- `tab`: The tab whose attributes are obtained.

<a id="return-value"></a>

## Return Value

The dictionary of attributes associated with the tab, or if no dictionary is present, `NULL`.

## See Also

### Getting Text Tab Data

- [CTTextTabGetAlignment](cttexttabgetalignment%28__%29.md): Returns the text alignment of the tab.
- [CTTextTabGetLocation](cttexttabgetlocation%28__%29.md): Returns the tab’s ruler location.
