> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpolicydecisionlistener/ignore()](https://developer.apple.com/documentation/webkit/webpolicydecisionlistener/ignore())

# ignore() (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Tells the listener to ignore the resource.

## Declaration

```swift
func ignore()
```

<a id="Discussion"></a>

## Discussion

You might invoke this method to handle the resource request yourself. For example, you might want to open a new window, open a window behind the current window, open a URL in an external application, or show a file URL location in the Finder.

## See Also

### Making Resource-Usage Decisions

- [download()](download%28%29.md): Deprecated. Tells the listener to download the resource instead of displaying it.
- [use()](use%28%29.md): Deprecated. Tells the listener to use the resource.

# ignore (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Tells the listener to ignore the resource.

## Declaration

```objectivec
- (void) ignore;
```

<a id="Discussion"></a>

## Discussion

You might invoke this method to handle the resource request yourself. For example, you might want to open a new window, open a window behind the current window, open a URL in an external application, or show a file URL location in the Finder.

## See Also

### Making Resource-Usage Decisions

- [download](download%28%29.md): Deprecated. Tells the listener to download the resource instead of displaying it.
- [use](use%28%29.md): Deprecated. Tells the listener to use the resource.
