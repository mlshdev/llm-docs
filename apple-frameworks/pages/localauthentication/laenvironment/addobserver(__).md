> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/localauthentication/laenvironment/addobserver(_:)

# addObserver(\_:) (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
func addObserver(_ observer: any LAEnvironment.Observer)
```

<a id="discussion"></a>

## Discussion

Adds observer to monitor changes of the environment.

The observer will be held weakly so its instance should be kept alive by the caller.

# addObserver: (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```objectivec
- (void) addObserver:(id<LAEnvironmentObserver>) observer;
```

<a id="discussion"></a>

## Discussion

Adds observer to monitor changes of the environment.

The observer will be held weakly so its instance should be kept alive by the caller.
