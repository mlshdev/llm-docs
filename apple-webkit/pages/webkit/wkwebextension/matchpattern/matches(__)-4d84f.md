> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/matchpattern/matches(_:)-4d84f](https://developer.apple.com/documentation/webkit/wkwebextension/matchpattern/matches(_:)-4d84f)

# matches(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Matches the receiver pattern against the specified pattern.

## Declaration

```swift
func matches(_ pattern: WKWebExtension.MatchPattern?) -> Bool
```

## Parameters

- `pattern`: The pattern to match against the receiver pattern.

<a id="return-value"></a>

## Return Value

A Boolean value indicating if the receiver pattern matches the specified pattern.

## See Also

### Related Documentation

- [matches(\_:options:)](matches%28__options_%29-fnde.md): Matches the receiver pattern against the specified pattern with options.

# matchesPattern: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Matches the receiver pattern against the specified pattern.

## Declaration

```objectivec
- (BOOL) matchesPattern:(WKWebExtensionMatchPattern *) pattern;
```

## Parameters

- `pattern`: The pattern to match against the receiver pattern.

<a id="return-value"></a>

## Return Value

A Boolean value indicating if the receiver pattern matches the specified pattern.

## See Also

### Related Documentation

- [matchesPattern:options:](matches%28__options_%29-fnde.md): Matches the receiver pattern against the specified pattern with options.
