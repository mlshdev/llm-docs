> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/cttexttabgetalignment(_:)](https://developer.apple.com/documentation/coretext/cttexttabgetalignment(_:))

# CTTextTabGetAlignment(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the text alignment of the tab.

## Declaration

```swift
func CTTextTabGetAlignment(_ tab: CTTextTab) -> CTTextAlignment
```

## Parameters

- `tab`: The tab whose text alignment is obtained.

<a id="return-value"></a>

## Return Value

The tab’s text alignment value.

## See Also

### Getting Text Tab Data

- [CTTextTabGetLocation(\_:)](cttexttabgetlocation%28__%29.md): Returns the tab’s ruler location.
- [CTTextTabGetOptions(\_:)](cttexttabgetoptions%28__%29.md): Returns the dictionary of attributes associated with the tab.

# CTTextTabGetAlignment (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the text alignment of the tab.

## Declaration

```objectivec
extern CTTextAlignment CTTextTabGetAlignment(CTTextTabRef tab);
```

## Parameters

- `tab`: The tab whose text alignment is obtained.

<a id="return-value"></a>

## Return Value

The tab’s text alignment value.

## See Also

### Getting Text Tab Data

- [CTTextTabGetLocation](cttexttabgetlocation%28__%29.md): Returns the tab’s ruler location.
- [CTTextTabGetOptions](cttexttabgetoptions%28__%29.md): Returns the dictionary of attributes associated with the tab.
