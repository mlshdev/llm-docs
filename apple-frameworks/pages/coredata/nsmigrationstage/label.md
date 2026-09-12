> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmigrationstage/label](https://developer.apple.com/documentation/coredata/nsmigrationstage/label)

# label (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The textual description of the migration stage’s purpose.

## Declaration

```swift
var label: String! { get set }
```

<a id="Discussion"></a>

## Discussion

Persistent history tracking, if enabled, records the label for later use. The default value is an empty string.

# label (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The textual description of the migration stage’s purpose.

## Declaration

```objectivec
@property (nonatomic, copy, null_resettable) NSString * label;
```

<a id="Discussion"></a>

## Discussion

Persistent history tracking, if enabled, records the label for later use. The default value is an empty string.
