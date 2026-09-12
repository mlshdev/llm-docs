> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/cttexttabgetlocation(_:)](https://developer.apple.com/documentation/coretext/cttexttabgetlocation(_:))

# CTTextTabGetLocation(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the tab’s ruler location.

## Declaration

```swift
func CTTextTabGetLocation(_ tab: CTTextTab) -> Double
```

## Parameters

- `tab`: The tab whose location is obtained.

<a id="return-value"></a>

## Return Value

The tab’s ruler location relative to the back margin.

## See Also

### Getting Text Tab Data

- [CTTextTabGetAlignment(\_:)](cttexttabgetalignment%28__%29.md): Returns the text alignment of the tab.
- [CTTextTabGetOptions(\_:)](cttexttabgetoptions%28__%29.md): Returns the dictionary of attributes associated with the tab.

# CTTextTabGetLocation (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the tab’s ruler location.

## Declaration

```objectivec
extern double CTTextTabGetLocation(CTTextTabRef tab);
```

## Parameters

- `tab`: The tab whose location is obtained.

<a id="return-value"></a>

## Return Value

The tab’s ruler location relative to the back margin.

## See Also

### Getting Text Tab Data

- [CTTextTabGetAlignment](cttexttabgetalignment%28__%29.md): Returns the text alignment of the tab.
- [CTTextTabGetOptions](cttexttabgetoptions%28__%29.md): Returns the dictionary of attributes associated with the tab.
