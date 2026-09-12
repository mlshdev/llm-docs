> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/requesthistoricallocations(purposekey:samplecount:completionhandler:)](https://developer.apple.com/documentation/corelocation/cllocationmanager/requesthistoricallocations(purposekey:samplecount:completionhandler:))

# requestHistoricalLocations(purposeKey:sampleCount:completionHandler:) (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** watchOS 9.0+

## Declaration

```swift
func requestHistoricalLocations(purposeKey: String, sampleCount: Int, completionHandler handler: @escaping @Sendable ([CLLocation], (any Error)?) -> Void)
```

```swift
func historicalLocations(purposeKey: String, sampleCount: Int) async throws -> [CLLocation]
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func historicalLocations(purposeKey: String, sampleCount: Int) async throws -> [CLLocation]
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

# requestHistoricalLocationsWithPurposeKey:sampleCount:completionHandler: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** watchOS 9.0+

## Declaration

```objectivec
- (void) requestHistoricalLocationsWithPurposeKey:(NSString *) purposeKey sampleCount:(NSInteger) sampleCount completionHandler:(void (^)(NSArray<CLLocation *> *, NSError *)) handler;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func historicalLocations(purposeKey: String, sampleCount: Int) async throws -> [CLLocation]
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).
