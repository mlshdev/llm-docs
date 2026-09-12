> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betarecruitmentcriterion](https://developer.apple.com/documentation/appstoreconnectapi/betarecruitmentcriterion)

# BetaRecruitmentCriterion

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.8+

A rule that controls which testers are automatically invited to a beta group based on device family and OS version.

## Declaration

```
object BetaRecruitmentCriterion
```

## Properties

- `attributes` — `BetaRecruitmentCriterion.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `type` — `string` (required): **Allowed values:** `betaRecruitmentCriteria`

## Topics

### Dictionaries

- [BetaRecruitmentCriterion.Attributes](betarecruitmentcriterion/attributes-data.dictionary.md): Attributes that describe a beta recruitment criterion resource.

## See Also

### Objects

- [BetaRecruitmentCriterionCompatibleBuildCheck](betarecruitmentcriterioncompatiblebuildcheck.md): The result of checking whether a specific build meets the device family and OS version requirements of a beta recruitment criterion.
- [BetaRecruitmentCriterionCompatibleBuildCheckResponse](betarecruitmentcriterioncompatiblebuildcheckresponse.md): A response containing a single result of checking whether a build meets the requirements of a beta recruitment criterion.
- [BetaRecruitmentCriterionCreateRequest](betarecruitmentcriterioncreaterequest.md): The request body you use to create a beta recruitment criterion.
- [BetaRecruitmentCriterionOption](betarecruitmentcriterionoption.md): A specific device family and OS version combination available as a value for a beta recruitment criterion.
- [BetaRecruitmentCriterionResponse](betarecruitmentcriterionresponse.md): A response containing a single beta recruitment criterion and its configured device/OS requirements.
- [BetaRecruitmentCriterionUpdateRequest](betarecruitmentcriterionupdaterequest.md): The request body for updating the device family and OS version requirements of a beta recruitment criterion.
- [BetaPublicLinkUsagesV1MetricResponse](betapubliclinkusagesv1metricresponse.md): A metrics response containing usage data for a TestFlight public invite link, showing tester enrollment trends.
- [DeviceFamily](devicefamily.md): String that represents a device family.
- [DeviceFamilyOsVersionFilter](devicefamilyosversionfilter.md): The object that you use to specify a device family and operating system to use for your beta recruitment criteria.
- [BetaRecruitmentCriterionOptionsResponse](betarecruitmentcriterionoptionsresponse.md): A response containing a list of device family and OS version options for configuring a beta recruitment criterion.
