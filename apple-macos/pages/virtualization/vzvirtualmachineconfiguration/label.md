> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachineconfiguration/label](https://developer.apple.com/documentation/virtualization/vzvirtualmachineconfiguration/label)

# label (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

An optional label for the virtual machine.

## Declaration

```swift
var label: String? { get set }
```

<a id="discussion"></a>

## Discussion

The framework uses this string as part of the name of the virtual machine in some system services. The label must be non-empty, less than or equal to 64 characters in length, and contain at least one non-whitespace character.

# label (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

An optional label for the virtual machine.

## Declaration

```objectivec
@property (copy, nullable) NSString * label;
```

<a id="discussion"></a>

## Discussion

The framework uses this string as part of the name of the virtual machine in some system services. The label must be non-empty, less than or equal to 64 characters in length, and contain at least one non-whitespace character.
