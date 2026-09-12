> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webdatasource/init(request:)](https://developer.apple.com/documentation/webkit/webdatasource/init(request:))

# init(request:) (Swift)

**Framework:** WebKit  
**Kind:** Initializer  
**Availability:** macOS 10.3+ (deprecated in 10.14)

initializes a data source with a URL request.

## Declaration

```swift
init!(request: URLRequest!)
```

## Parameters

- `request`: The URL request used to load the web content.

<a id="return-value"></a>

## Return Value

The initialized web data source.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for `WebDataSource` objects. Normally, `WebFrame` objects create their data sources, so you should not invoke this method directly.

## See Also

### Related Documentation

- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)

# initWithRequest: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

initializes a data source with a URL request.

## Declaration

```objectivec
- (instancetype) initWithRequest:(NSURLRequest *) request;
```

## Parameters

- `request`: The URL request used to load the web content.

<a id="return-value"></a>

## Return Value

The initialized web data source.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for `WebDataSource` objects. Normally, `WebFrame` objects create their data sources, so you should not invoke this method directly.

## See Also

### Related Documentation

- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)
