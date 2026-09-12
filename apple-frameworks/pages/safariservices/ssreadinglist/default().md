> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/ssreadinglist/default()](https://developer.apple.com/documentation/safariservices/ssreadinglist/default())

# default() (Swift)

**Framework:** Safari Services  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Returns the Safari Reading List singleton object.

## Declaration

```swift
class func `default`() -> SSReadingList?
```

<a id="return-value"></a>

## Return Value

The shared instance of the Reading List, or `nil` if access to the Reading List is not permitted.

# defaultReadingList (Objective-C)

**Framework:** Safari Services  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Returns the Safari Reading List singleton object.

## Declaration

```objectivec
+ (SSReadingList *) defaultReadingList;
```

<a id="return-value"></a>

## Return Value

The shared instance of the Reading List, or `nil` if access to the Reading List is not permitted.
