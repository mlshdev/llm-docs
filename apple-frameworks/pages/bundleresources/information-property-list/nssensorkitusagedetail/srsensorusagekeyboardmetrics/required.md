> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nssensorkitusagedetail/srsensorusagekeyboardmetrics/required](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedetail/srsensorusagekeyboardmetrics/required)

# Required

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 14.0+ · iPadOS 14.0+

A Boolean value that indicates whether your app’s study relies on this sensor.

## Details

`Required`

<a id="Discussion"></a>

## Discussion

The system checks the value for this property when the user declines the access prompt for this sensor. If you set the value of this property to `true`, the system forgoes installing your app. If `false`, the system withholds the sensor’s data but installs your app assuming your study can continue at a limited capacity without the sensor’s data.

## See Also

### Sensor usage keys

- [Description](description.md): An explanatory string that details the manner in which your study uses the sensor’s data.
