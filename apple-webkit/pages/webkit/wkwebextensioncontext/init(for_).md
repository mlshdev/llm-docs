> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/init(for:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/init(for:))

# init(for:) (Swift)

**Framework:** WebKit  
**Kind:** Initializer  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Returns a web extension context initialized with a specified extension.

## Declaration

```swift
init(for extension: WKWebExtension)
```

## Parameters

- `extension`: The extension to use for the new web extension context.

<a id="return-value"></a>

## Return Value

An initialized web extension context.

<a id="discussion"></a>

## Discussion

This is a designated initializer.

# initForExtension: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Returns a web extension context initialized with a specified extension.

## Declaration

```objectivec
- (instancetype) initForExtension:(WKWebExtension *) extension;
```

## Parameters

- `extension`: The extension to use for the new web extension context.

<a id="return-value"></a>

## Return Value

An initialized web extension context.

<a id="discussion"></a>

## Discussion

This is a designated initializer.
