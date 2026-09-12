> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderdomain/supportsstringsearchrequest](https://developer.apple.com/documentation/fileprovider/nsfileproviderdomain/supportsstringsearchrequest)

# supportsStringSearchRequest (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

A Boolean value that indicates whether the provider supports search.

## Declaration

```swift
var supportsStringSearchRequest: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If this value is `true`, the framework uses the extension’s [NSFileProviderSearching](../nsfileprovidersearching.md) implementation to support search.

The property defaults to `false` (Swift) or `NO` (Objective-C).

# supportsStringSearchRequest (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

A Boolean value that indicates whether the provider supports search.

## Declaration

```objectivec
@property (assign, readwrite) BOOL supportsStringSearchRequest;
```

<a id="discussion"></a>

## Discussion

If this value is `true`, the framework uses the extension’s [NSFileProviderSearching](../nsfileprovidersearching.md) implementation to support search.

The property defaults to `false` (Swift) or `NO` (Objective-C).
