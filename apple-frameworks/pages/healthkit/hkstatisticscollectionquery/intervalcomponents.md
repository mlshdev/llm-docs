> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkstatisticscollectionquery/intervalcomponents](https://developer.apple.com/documentation/healthkit/hkstatisticscollectionquery/intervalcomponents)

# intervalComponents (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The date components that define the time interval for each statistics object in the collection.

## Declaration

```swift
var intervalComponents: DateComponents { get }
```

<a id="Discussion"></a>

## Discussion

This property defines the length of the time intervals for your collection. The following code sample shows a number of common time intervals.

**Swift**

```swift
let fiveMinutes = NSDateComponents()
fiveMinutes.minute = 5
 
let hour = NSDateComponents()
hour.hour = 1
 
let day = NSDateComponents()
day.day = 1
 
let week = NSDateComponents()
week.day = 7
 
let month = NSDateComponents()
month.month = 1
 
let year = NSDateComponents()
year.year = 1
```

**Objective-C**

```objc
NSDateComponents *fiveMinutes = [[NSDateComponents alloc] init];
fiveMinutes.minute = 5;
 
NSDateComponents *hour = [[NSDateComponents alloc] init];
hour.hour = 1;
 
NSDateComponents *day = [[NSDateComponents alloc] init];
day.day = 1;
 
NSDateComponents *week = [[NSDateComponents alloc] init];
week.day = 7;
 
NSDateComponents *month = [[NSDateComponents alloc] init];
month.month = 1;
 
NSDateComponents *year = [[NSDateComponents alloc] init];
year.year = 1;
```

## See Also

### Getting Property Data

- [anchorDate](anchordate.md): The anchor date for the collection’s time intervals.
- [options](options.md): A list of options that define the type of statistical calculations performed and the way in which data from multiple sources are merged.

# intervalComponents (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The date components that define the time interval for each statistics object in the collection.

## Declaration

```objectivec
@property (copy, readonly) NSDateComponents * intervalComponents;
```

<a id="Discussion"></a>

## Discussion

This property defines the length of the time intervals for your collection. The following code sample shows a number of common time intervals.

**Swift**

```swift
let fiveMinutes = NSDateComponents()
fiveMinutes.minute = 5
 
let hour = NSDateComponents()
hour.hour = 1
 
let day = NSDateComponents()
day.day = 1
 
let week = NSDateComponents()
week.day = 7
 
let month = NSDateComponents()
month.month = 1
 
let year = NSDateComponents()
year.year = 1
```

**Objective-C**

```objc
NSDateComponents *fiveMinutes = [[NSDateComponents alloc] init];
fiveMinutes.minute = 5;
 
NSDateComponents *hour = [[NSDateComponents alloc] init];
hour.hour = 1;
 
NSDateComponents *day = [[NSDateComponents alloc] init];
day.day = 1;
 
NSDateComponents *week = [[NSDateComponents alloc] init];
week.day = 7;
 
NSDateComponents *month = [[NSDateComponents alloc] init];
month.month = 1;
 
NSDateComponents *year = [[NSDateComponents alloc] init];
year.year = 1;
```

## See Also

### Getting Property Data

- [anchorDate](anchordate.md): The anchor date for the collection’s time intervals.
- [options](options.md): A list of options that define the type of statistical calculations performed and the way in which data from multiple sources are merged.
