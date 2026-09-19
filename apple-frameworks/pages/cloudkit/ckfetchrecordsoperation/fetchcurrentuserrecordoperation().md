> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/ckfetchrecordsoperation/fetchcurrentuserrecordoperation()

# fetchCurrentUserRecordOperation() (Swift)

**Framework:** CloudKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Returns a fetch operation for retrieving the current user record.

## Declaration

```swift
class func fetchCurrentUserRecordOperation() -> Self
```

<a id="discussion"></a>

## Discussion

The returned operation object searches for the single record that corresponds to the current user record. You must associate at least one progress handler with the operation object (excluding the completion handler) to process the results.

# fetchCurrentUserRecordOperation (Objective-C)

**Framework:** CloudKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Returns a fetch operation for retrieving the current user record.

## Declaration

```objectivec
+ (instancetype) fetchCurrentUserRecordOperation;
```

<a id="discussion"></a>

## Discussion

The returned operation object searches for the single record that corresponds to the current user record. You must associate at least one progress handler with the operation object (excluding the completion handler) to process the results.
