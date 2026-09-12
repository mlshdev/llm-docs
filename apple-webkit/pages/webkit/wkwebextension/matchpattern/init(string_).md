> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/matchpattern/init(string:)](https://developer.apple.com/documentation/webkit/wkwebextension/matchpattern/init(string:))

# init(string:) (Swift)

**Framework:** WebKit  
**Kind:** Initializer  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Returns a pattern object for the specified pattern string.

## Declaration

```swift
init(string: String) throws
```

## Parameters

- `string`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

A pattern object, or `nil` if the pattern string is invalid and an error will be set.

# initWithString:error: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Returns a pattern object for the specified pattern string.

## Declaration

```objectivec
- (instancetype) initWithString:(NSString *) string error:(NSError **) error;
```

## Parameters

- `string`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.
- `error`: Set to \\c nil or an error instance if an error occurred.

<a id="return-value"></a>

## Return Value

A pattern object, or `nil` if the pattern string is invalid and an error will be set.
