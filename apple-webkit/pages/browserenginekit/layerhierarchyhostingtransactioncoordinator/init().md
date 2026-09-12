> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/layerhierarchyhostingtransactioncoordinator/init()](https://developer.apple.com/documentation/browserenginekit/layerhierarchyhostingtransactioncoordinator/init())

# init() (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Creates a transaction coordinator.

## Declaration

```swift
init() throws
```

<a id="discussion"></a>

## Discussion

This initializer can fail and throw an error if the process fails to retrieve a connection to the system’s Core Animation rendering server.

This method takes ownership of the port send right.

## See Also

### Creating a transaction coordinator

- [init(coder:)](init%28coder_%29.md): Creates a transaction coordinator from an encoded representation.

# coordinatorWithError: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Type Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Creates a transaction coordinator.

## Declaration

```objectivec
+ (BELayerHierarchyHostingTransactionCoordinator *) coordinatorWithError:(NSError **) error;
```

## Parameters

- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="discussion"></a>

## Discussion

This initializer can fail and throw an error if the process fails to retrieve a connection to the system’s Core Animation rendering server.

This method takes ownership of the port send right.
