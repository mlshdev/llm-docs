> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/cixcodeversion/attributes-data.dictionary/testdestinations-data.dictionary/availableruntimes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/cixcodeversion/attributes-data.dictionary/testdestinations-data.dictionary/availableruntimes-data.dictionary)

# CiXcodeVersion.Attributes.TestDestinations.AvailableRuntimes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

An available simulator runtime for this Xcode Cloud version, specifying the platform and OS version it can simulate.

## Declaration

```
object CiXcodeVersion.Attributes.TestDestinations.AvailableRuntimes
```

## Properties

- `runtimeIdentifier` — `string`: A string that identifies the simulated environment Xcode Cloud uses for a test action.
- `runtimeName` — `string`: The name of the operating system of the simulated environment Xcode Cloud uses.
