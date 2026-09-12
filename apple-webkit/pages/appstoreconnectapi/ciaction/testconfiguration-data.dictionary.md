> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/ciaction/testconfiguration-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/ciaction/testconfiguration-data.dictionary)

# CiAction.TestConfiguration

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The test configuration for a test action.

## Declaration

```
object CiAction.TestConfiguration
```

## Properties

- `kind` — `string`: A string that describes whether the test action uses the scheme’s default tests or a specific test plan.
  **Allowed values:** `USE_SCHEME_SETTINGS`, `SPECIFIC_TEST_PLANS`
- `testDestinations` — `[CiTestDestination]`: A list of destination information for the test configuration.
- `testPlanName` — `string`: The name of the test plan. This value is only available to test actions that set the `kind` field to `SPECIFIC_TEST_PLANS`.

## Topics

### Objects and types

- [CiTestDestination](../citestdestination.md): The test destination of a test action that Xcode Cloud performs.
- [CiTestDestinationKind](../citestdestinationkind.md): The string that represents the kind of a test destination.
