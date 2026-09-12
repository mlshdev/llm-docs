> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nssensorkitusagedetail/srsensorusageppg/required](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail/srsensorusageppg/required)

# Required

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A Boolean value that indicates whether your app’s study relies on this sensor.

## Details

`Required`

<a id="Discussion"></a>

## Discussion

The system checks the value for this property when the person declines the access prompt for this sensor. If you set the value of this property to `true`, the system forgoes installing your app. If `false`, the system withholds the sensor’s data but installs your app assuming your study can continue at a limited capacity without the sensor’s data.

## See Also

### Sensor usage keys

- [Description](description.md): An explanatory string that details the manner in which your study uses the ECG sensor’s data.
