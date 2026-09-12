> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctactivity](https://developer.apple.com/documentation/xctest/xctactivity)

# XCTActivity (Swift)

**Framework:** XCTest  
**Kind:** Protocol

A named substep of a test method.

## Declaration

```swift
protocol XCTActivity : NSObjectProtocol
```

## Mentioned In

- [Adding Attachments to Tests, Activities, and Issues](adding-attachments-to-tests-activities-and-issues.md)

## Topics

### Adding Attachments

- [add(\_:)](xctactivity/add%28__%29.md): Associates a file, image, or other attachment with the activity.

### Activity Properties

- [name](xctactivity/name.md): A human-readable name for the activity.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [XCTestCase](xctestcase.md)

## See Also

### Activities

- [Grouping Tests into Substeps with Activities](grouping-tests-into-substeps-with-activities.md): Simplify test reports by creating activities that organize substeps within complex test methods.
- [XCTContext](xctcontext.md): A proxy for the current testing context.

# XCTActivity (Objective-C)

**Framework:** XCTest  
**Kind:** Protocol

A named substep of a test method.

## Declaration

```objectivec
@protocol XCTActivity <NSObject>
```

## Mentioned In

- [Adding Attachments to Tests, Activities, and Issues](adding-attachments-to-tests-activities-and-issues.md)

## Topics

### Adding Attachments

- [addAttachment:](xctactivity/add%28__%29.md): Associates a file, image, or other attachment with the activity.

### Activity Properties

- [name](xctactivity/name.md): A human-readable name for the activity.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [XCTestCase](xctestcase.md)

## See Also

### Activities

- [Grouping Tests into Substeps with Activities](grouping-tests-into-substeps-with-activities.md): Simplify test reports by creating activities that organize substeps within complex test methods.
- [XCTContext](xctcontext.md): A proxy for the current testing context.
