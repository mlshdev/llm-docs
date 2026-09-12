> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webdocumentrepresentation/setdatasource(_:)](https://developer.apple.com/documentation/webkit/webdocumentrepresentation/setdatasource(_:))

# setDataSource(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sets the receiver’s data source.

## Declaration

```swift
func setDataSource(_ dataSource: WebDataSource!)
```

## Parameters

- `dataSource`: The data source to associate with the object.

<a id="Discussion"></a>

## Discussion

This method is invoked soon after the document representation is created.

## See Also

### Related Documentation

- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)
- [finishedLoading(with:)](finishedloading%28with_%29.md): Deprecated. Invoked when a data source finishes loading its content.

# setDataSource: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sets the receiver’s data source.

## Declaration

```objectivec
- (void) setDataSource:(WebDataSource *) dataSource;
```

## Parameters

- `dataSource`: The data source to associate with the object.

<a id="Discussion"></a>

## Discussion

This method is invoked soon after the document representation is created.

## See Also

### Related Documentation

- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)
- [finishedLoadingWithDataSource:](finishedloading%28with_%29.md): Deprecated. Invoked when a data source finishes loading its content.
