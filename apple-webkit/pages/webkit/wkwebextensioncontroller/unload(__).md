> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontroller/unload(_:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontroller/unload(_:))

# unload(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Unloads the specified extension context.

## Declaration

```swift
func unload(_ extensionContext: WKWebExtensionContext) throws
```

<a id="discussion"></a>

## Discussion

Causes the context to stop running.

## See Also

### Related Documentation

- [unload(\_:)](unload%28__%29.md): Unloads the specified extension context.

# unloadExtensionContext:error: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Unloads the specified extension context.

## Declaration

```objectivec
- (BOOL) unloadExtensionContext:(WKWebExtensionContext *) extensionContext error:(NSError **) error;
```

## Parameters

- `error`: Set to `nil` or an `NSError` instance if an error occurred.

<a id="return-value"></a>

## Return Value

A Boolean value indicating if the context was successfully unloaded.

<a id="discussion"></a>

## Discussion

Causes the context to stop running.

## See Also

### Related Documentation

- [unloadExtensionContext:error:](unload%28__%29.md): Unloads the specified extension context.
