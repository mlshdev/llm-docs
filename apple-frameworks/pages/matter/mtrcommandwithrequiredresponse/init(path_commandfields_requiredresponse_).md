> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrcommandwithrequiredresponse/init(path:commandfields:requiredresponse:)](https://developer.apple.com/documentation/matter/mtrcommandwithrequiredresponse/init(path:commandfields:requiredresponse:))

# init(path:commandFields:requiredResponse:) (Swift)

**Framework:** Matter  
**Kind:** Initializer  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
init(path: MTRCommandPath, commandFields: [String : Any]?, requiredResponse: [NSNumber : [String : Any]]?)
```

# initWithPath:commandFields:requiredResponse: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (instancetype) initWithPath:(MTRCommandPath *) path commandFields:(NSDictionary<NSString *,id> *) commandFields requiredResponse:(NSDictionary<NSNumber *,NSDictionary<NSString *,id> *> *) requiredResponse;
```
