> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laenvironment/state-swift.class/companions](https://developer.apple.com/documentation/localauthentication/laenvironment/state-swift.class/companions)

# companions (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

## Declaration

```swift
var companions: [LAEnvironment.MechanismCompanion] { get }
```

<a id="discussion"></a>

## Discussion

Companion authentication mechanisms.

Companion mechanisms such as Apple Watch can appear and disappear as they get in and out of reach, but this property enumerates paired companions, even if they are not reachable at the moment. Check @c isUsable property to determine if a particular companion type is available for use. Note that items in this array represent paired companion types, not individual devices. Therefore, even if the user has paired multiple Apple Watch devices for companion authentication, the array will contain only one

# companions (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<LAEnvironmentMechanismCompanion *> * companions;
```

<a id="discussion"></a>

## Discussion

Companion authentication mechanisms.

Companion mechanisms such as Apple Watch can appear and disappear as they get in and out of reach, but this property enumerates paired companions, even if they are not reachable at the moment. Check @c isUsable property to determine if a particular companion type is available for use. Note that items in this array represent paired companion types, not individual devices. Therefore, even if the user has paired multiple Apple Watch devices for companion authentication, the array will contain only one
