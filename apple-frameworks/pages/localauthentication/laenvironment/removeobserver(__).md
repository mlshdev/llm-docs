> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laenvironment/removeobserver(_:)](https://developer.apple.com/documentation/localauthentication/laenvironment/removeobserver(_:))

# removeObserver(\_:) (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
func removeObserver(_ observer: any LAEnvironment.Observer)
```

<a id="discussion"></a>

## Discussion

Removes the previously registered observer.

If the observer is deallocated, it will be removed automatically.

# removeObserver: (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```objectivec
- (void) removeObserver:(id<LAEnvironmentObserver>) observer;
```

<a id="discussion"></a>

## Discussion

Removes the previously registered observer.

If the observer is deallocated, it will be removed automatically.
