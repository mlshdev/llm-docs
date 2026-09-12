> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/configurationchangestatus](https://developer.apple.com/documentation/mapkitjs/configurationchangestatus)

# ConfigurationChangeStatus

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Enumeration  
**Availability:** MapKit JS 5.0+

Values that represent the status of a configuration change.

## Declaration

```
const ConfigurationChangeStatus: Readonly<{
    readonly Initialized: "Initialized";
    readonly Refreshed: "Refreshed";
}>
type ConfigurationChangeStatus =
    (typeof ConfigurationChangeStatus)[keyof typeof ConfigurationChangeStatus];
```

## Topics

### Enumeration Cases

- [Initialized](configurationchangestatus/initialized.md): A status value that indicates the initialization of the configuration is successful.
- [Refreshed](configurationchangestatus/refreshed.md): A status value that indicates the configuration refresh is successful.

## See Also

### Initialization and error status

- [ConfigurationErrorStatus](configurationerrorstatus.md): A value that represents the status of a configuration error.
