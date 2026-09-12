> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustertimeformatlocalization/readattributesupportedcalendartypes(completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclustertimeformatlocalization/readattributesupportedcalendartypes(completionhandler:))

# readAttributeSupportedCalendarTypes(completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeSupportedCalendarTypesWithCompletion:

## Declaration

```swift
func readAttributeSupportedCalendarTypes(completionHandler: @escaping @Sendable ([Any]?, (any Error)?) -> Void)
```

```swift
func readAttributeSupportedCalendarTypes() async throws -> [Any]
```

# readAttributeSupportedCalendarTypesWithCompletionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeSupportedCalendarTypesWithCompletion:

## Declaration

```objectivec
- (void) readAttributeSupportedCalendarTypesWithCompletionHandler:(void (^)(NSArray *value, NSError *error)) completionHandler;
```
