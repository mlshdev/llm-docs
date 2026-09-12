> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnfixeddetectiontrack-5aei2/initwithfocusdisparity:](https://developer.apple.com/documentation/cinematic/cnfixeddetectiontrack-5aei2/initwithfocusdisparity:)

# initWithFocusDisparity:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Creates a detection track with fixed focus at the given disparity.

## Declaration

```objectivec
- (instancetype) initWithFocusDisparity:(float) focusDisparity;
```

## Parameters

- `focusDisparity`: The disparity to use in order to focus on the object (use the static \`disparity\` method to compute if unknown).
