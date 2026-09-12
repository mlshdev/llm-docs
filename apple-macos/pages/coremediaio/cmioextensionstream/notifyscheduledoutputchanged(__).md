> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstream/notifyscheduledoutputchanged(_:)](https://developer.apple.com/documentation/coremediaio/cmioextensionstream/notifyscheduledoutputchanged(_:))

# notifyScheduledOutputChanged(\_:) (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Notifies clients when a particular buffer is output.

## Declaration

```swift
func notifyScheduledOutputChanged(_ scheduledOutput: CMIOExtensionScheduledOutput)
```

## Parameters

- `scheduledOutput`: The scheduled output.

## See Also

### Managing Scheduled Output

- [CMIOExtensionScheduledOutput](../cmioextensionscheduledoutput.md): An object that represents scheduled output.

# notifyScheduledOutputChanged: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Notifies clients when a particular buffer is output.

## Declaration

```objectivec
- (void) notifyScheduledOutputChanged:(CMIOExtensionScheduledOutput *) scheduledOutput;
```

## Parameters

- `scheduledOutput`: The scheduled output.

## See Also

### Managing Scheduled Output

- [CMIOExtensionScheduledOutput](../cmioextensionscheduledoutput.md): An object that represents scheduled output.
