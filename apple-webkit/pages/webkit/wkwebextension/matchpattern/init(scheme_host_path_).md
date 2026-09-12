> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/matchpattern/init(scheme:host:path:)](https://developer.apple.com/documentation/webkit/wkwebextension/matchpattern/init(scheme:host:path:))

# init(scheme:host:path:) (Swift)

**Framework:** WebKit  
**Kind:** Initializer  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Returns a pattern object for the specified scheme, host, and path strings.

## Declaration

```swift
init(scheme: String, host: String, path: String) throws
```

## Parameters

- `scheme`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

A pattern object, or `nil` if any of the strings are invalid and an error will be set.

# initWithScheme:host:path:error: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Returns a pattern object for the specified scheme, host, and path strings.

## Declaration

```objectivec
- (instancetype) initWithScheme:(NSString *) scheme host:(NSString *) host path:(NSString *) path error:(NSError **) error;
```

## Parameters

- `scheme`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.
- `error`: Set to `nil` or an error instance if an error occurred.

<a id="return-value"></a>

## Return Value

A pattern object, or `nil` if any of the strings are invalid and an error will be set.
