> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nssensorkitusagedescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitusagedescription)

# NSSensorKitUsageDescription

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 14.0+ · iPadOS 14.0+

A short description of the purpose of your app’s research study.

## Details

`NSSensorKitUsageDescription`

<a id="Discussion"></a>

## Discussion

When your app attempts to read sensor information for the first time on a user’s device, the system presents this string to explain your app’s study. Users approve or deny your app’s ability to read private sensor information based on the description you provide for this property.

For more information, see [Configuring your project for sensor reading](https://developer.apple.com/documentation/sensorkit/configuring-your-project-for-sensor-reading).

## See Also

### Sensors

- [NSSensorKitUsageDetail](nssensorkitusagedetail.md): A dictionary that includes keys for the specific information your app collects.
- [NSSensorKitPrivacyPolicyURL](nssensorkitprivacypolicyurl.md): A hyperlink to a webpage that displays the privacy policy for your app’s research study.
