> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/oslog/oslogstore/local()](https://developer.apple.com/documentation/oslog/oslogstore/local())

# local() (Swift)

**Framework:** OSLog  
**Kind:** Type Method  
**Availability:** macOS 10.15+

Creates a log store representing the Mac’s local store.

## Declaration

```swift
class func local() throws -> Self
```

<a id="Discussion"></a>

## Discussion

Gaining access to the local unified logging system requires permission from the system. The caller must be run by an admin account and have the `com.apple.logging.local-store` entitlement.

## See Also

### Creating Log Stores

- [init(url:)](init%28url_%29-5v3w7.md): Creates a log store based on a log archive.

# localStoreAndReturnError: (Objective-C)

**Framework:** OSLog  
**Kind:** Type Method  
**Availability:** macOS 10.15+

Creates a log store representing the Mac’s local store.

## Declaration

```objectivec
+ (instancetype) localStoreAndReturnError:(NSError **) error;
```

## Parameters

- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="Discussion"></a>

## Discussion

Gaining access to the local unified logging system requires permission from the system. The caller must be run by an admin account and have the `com.apple.logging.local-store` entitlement.

## See Also

### Creating Log Stores

- [storeWithURL:error:](init%28url_%29-5v3w7.md): Creates a log store based on a log archive.
