> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/bundleresources/information-property-list/nssensorkitprivacypolicyurl

# NSSensorKitPrivacyPolicyURL

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 14.0+ · iPadOS 14.0+

A hyperlink to a webpage that displays the privacy policy for your app’s research study.

## Details

`NSSensorKitPrivacyPolicyURL`

<a id="Discussion"></a>

## Discussion

When your app attempts to read sensor information for the first time on a user’s device, the system presents a sheet that displays a link to your app’s privacy policy. Users approve or deny your app’s ability to read private sensor information based on their assessment of your app’s privacy policy.

For more information, see [Configuring your project for sensor reading](https://developer.apple.com/documentation/sensorkit/configuring-your-project-for-sensor-reading).

## See Also

### Sensors

- [NSSensorKitUsageDescription](nssensorkitusagedescription.md): A short description of the purpose of your app’s research study.
- [NSSensorKitUsageDetail](nssensorkitusagedetail.md): A dictionary that includes keys for the specific information your app collects.
