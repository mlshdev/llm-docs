> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pencilkit/pktoolpickercustomitemconfiguration/initwithidentifier:name:

# initWithIdentifier:name:

**Interface language:** Objective-C

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Create a new configuration with an identifier and a name.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier name:(NSString *) name;
```

## Parameters

- `identifier`: A string that uniquely identifies the tool in the picker, such as `com.example.example-company.custom-tool`.
- `name`: A short string to show as the name of the tool in the UI.
