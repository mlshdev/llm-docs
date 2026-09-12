> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/matchpattern/matches(_:)-471rf](https://developer.apple.com/documentation/webkit/wkwebextension/matchpattern/matches(_:)-471rf)

# matches(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Matches the receiver pattern against the specified URL.

## Declaration

```swift
func matches(_ url: URL?) -> Bool
```

## Parameters

- `url`: The URL to match against the receiver pattern.

<a id="return-value"></a>

## Return Value

A Boolean value indicating if the pattern matches the specified URL.

## See Also

### Related Documentation

- [matches(\_:options:)](matches%28__options_%29-5wo3g.md): Matches the receiver pattern against the specified URL with options.

# matchesURL: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Matches the receiver pattern against the specified URL.

## Declaration

```objectivec
- (BOOL) matchesURL:(NSURL *) url;
```

## Parameters

- `url`: The URL to match against the receiver pattern.

<a id="return-value"></a>

## Return Value

A Boolean value indicating if the pattern matches the specified URL.

## See Also

### Related Documentation

- [matchesURL:options:](matches%28__options_%29-5wo3g.md): Matches the receiver pattern against the specified URL with options.
