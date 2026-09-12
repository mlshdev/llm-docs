> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/open(_:)](https://developer.apple.com/documentation/appkit/nsworkspace/open(_:))

# open(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Opens the location at the specified URL.

## Declaration

```swift
func open(_ url: URL) -> Bool
```

## Parameters

- `url`: A URL specifying the location to open.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the location was successfully opened; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You can call this method safely from any thread in macOS 10.6 and later.

## See Also

### Opening URLs

- [open(\_:configuration:completionHandler:)](open%28__configuration_completionhandler_%29.md): Opens a URL asynchronously using the provided options.
- [open(\_:withApplicationAt:configuration:completionHandler:)](open%28__withapplicationat_configuration_completionhandler_%29.md): Opens one or more URLs asynchronously in the specified app using the provided options.

# openURL: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Opens the location at the specified URL.

## Declaration

```objectivec
- (BOOL) openURL:(NSURL *) url;
```

## Parameters

- `url`: A URL specifying the location to open.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the location was successfully opened; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You can call this method safely from any thread in macOS 10.6 and later.

## See Also

### Opening URLs

- [openURL:configuration:completionHandler:](open%28__configuration_completionhandler_%29.md): Opens a URL asynchronously using the provided options.
- [openURLs:withApplicationAtURL:configuration:completionHandler:](open%28__withapplicationat_configuration_completionhandler_%29.md): Opens one or more URLs asynchronously in the specified app using the provided options.
