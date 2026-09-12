> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontroller/load(_:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontroller/load(_:))

# load(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Loads the specified extension context.

## Declaration

```swift
func load(_ extensionContext: WKWebExtensionContext) throws
```

<a id="discussion"></a>

## Discussion

Causes the context to start, loading any background content, and injecting any content into relevant tabs.

## See Also

### Related Documentation

- [load(\_:)](load%28__%29.md): Loads the specified extension context.

# loadExtensionContext:error: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Loads the specified extension context.

## Declaration

```objectivec
- (BOOL) loadExtensionContext:(WKWebExtensionContext *) extensionContext error:(NSError **) error;
```

## Parameters

- `error`: Set to `nil` or an `NSError` instance if an error occurred.

<a id="return-value"></a>

## Return Value

A Boolean value indicating if the context was successfully loaded.

<a id="discussion"></a>

## Discussion

Causes the context to start, loading any background content, and injecting any content into relevant tabs.

## See Also

### Related Documentation

- [loadExtensionContext:error:](load%28__%29.md): Loads the specified extension context.
