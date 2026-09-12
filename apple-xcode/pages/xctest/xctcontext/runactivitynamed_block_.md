> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctcontext/runactivitynamed:block:](https://developer.apple.com/documentation/xctest/xctcontext/runactivitynamed:block:)

# runActivityNamed:block:

**Interface language:** Objective-C

**Framework:** XCTest  
**Kind:** Type Method

Creates and runs an activity with the provided block of code.

## Declaration

```objectivec
+ (void) runActivityNamed:(NSString *) name block:(void (^)(id<XCTActivity>activity)) block;
```

## Parameters

- `name`: A descriptive name for the activity, for display in Xcode’s test results browser.
- `block`: A block of code for the test to execute as the body of the activity.

## Mentioned In

- [Adding Attachments to Tests, Activities, and Issues](../adding-attachments-to-tests-activities-and-issues.md)
- [Grouping Tests into Substeps with Activities](../grouping-tests-into-substeps-with-activities.md)

<a id="Discussion"></a>

## Discussion

Run a block of code as a named substep in a test. For more information, see [Grouping Tests into Substeps with Activities](../grouping-tests-into-substeps-with-activities.md).

To save screenshots or other test-result data for later investigation, call the [addAttachment:](../xctactivity/add%28__%29.md) method on the instance of [XCTActivity](../xctactivity.md) that the test system passes to your block. For more information, see [Adding Attachments to Tests, Activities, and Issues](../adding-attachments-to-tests-activities-and-issues.md).

## See Also

### Related Documentation

- [Grouping Tests into Substeps with Activities](../grouping-tests-into-substeps-with-activities.md): Simplify test reports by creating activities that organize substeps within complex test methods.
- [Adding Attachments to Tests, Activities, and Issues](../adding-attachments-to-tests-activities-and-issues.md): Use attachments to store a test’s output data for later analysis.
