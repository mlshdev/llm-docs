> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnlabeledvalue](https://developer.apple.com/documentation/contacts/cnlabeledvalue)

# CNLabeledValue (Swift)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An immutable object that combines a contact property value with a label that describes that property.

## Declaration

```swift
class CNLabeledValue<ValueType> where ValueType : NSCopying, ValueType : NSSecureCoding
```

<a id="overview"></a>

## Overview

Labels describe the context for a property. For example, the label for a phone number indicates whether it corresponds to the user’s home, work, or iPhone number.

`CNLabeledValue` objects are thread-safe, and you can access their properties from any thread of your app.

## Topics

### Creating a labeled value

- [init(label:value:)](cnlabeledvalue/init%28label_value_%29.md): Returns a new labeled value identifier.

### Getting the label and value

- [label](cnlabeledvalue/label.md): The label for a contact property value.
- [value](cnlabeledvalue/value.md): A contact property value.

### Setting labels and values

- [settingLabel(\_:)](cnlabeledvalue/settinglabel%28__%29.md): Returns a labeled value object with an existing value and identifier.
- [settingLabel(\_:value:)](cnlabeledvalue/settinglabel%28__value_%29.md): Returns a labeled value object with the specified label and value with the existing identifier.
- [settingValue(\_:)](cnlabeledvalue/settingvalue%28__%29.md): Returns a new value for an existing label and identifier.

### Localizing the label and value

- [localizedString(forLabel:)](cnlabeledvalue/localizedstring%28forlabel_%29.md): Returns a localized string for the specified label.

### Getting the unique identifier

- [identifier](cnlabeledvalue/identifier.md): A unique identifier for the labeled value object.

### Getting common labels

- [CNLabelHome](cnlabelhome.md): The label for identifying home information.
- [CNLabelWork](cnlabelwork.md): The label for identifying work information.
- [CNLabelSchool](cnlabelschool.md): The label for the contact’s school.
- [CNLabelOther](cnlabelother.md): The label for identifying other information.
- [CNLabelEmailiCloud](cnlabelemailicloud.md): The label for identifying the contact’s iCloud email information.
- [CNLabelURLAddressHomePage](cnlabelurladdresshomepage.md): The label for identifying URL information.
- [CNLabelDateAnniversary](cnlabeldateanniversary.md): The label for identifying the contact’s anniversary date.

### Getting phone number labels

- [CNLabelPhoneNumberMain](cnlabelphonenumbermain.md): The label for identifying the contact’s main phone number.
- [CNLabelPhoneNumberiPhone](cnlabelphonenumberiphone.md): The label for identifying the contact’s iPhone number.
- [CNLabelPhoneNumberAppleWatch](cnlabelphonenumberapplewatch.md): The label for identifying the contact’s Apple Watch phone number.
- [CNLabelPhoneNumberMobile](cnlabelphonenumbermobile.md): The label for identifying the contact’s mobile phone number.
- [CNLabelPhoneNumberPager](cnlabelphonenumberpager.md): The label for identifying the contact’s pager number.
- [CNLabelPhoneNumberWorkFax](cnlabelphonenumberworkfax.md): The label for identifying the contact’s work fax number.
- [CNLabelPhoneNumberHomeFax](cnlabelphonenumberhomefax.md): The label for identifying the contact’s home fax number.
- [CNLabelPhoneNumberOtherFax](cnlabelphonenumberotherfax.md): The label for identifying another fax number.

### Getting immediate family relationship labels

- [CNLabelContactRelationBrother](cnlabelcontactrelationbrother.md): The label for the contact’s brother.
- [CNLabelContactRelationChild](cnlabelcontactrelationchild.md): The label for the contact’s child.
- [CNLabelContactRelationDaughter](cnlabelcontactrelationdaughter.md): The label for the contact’s daughter.
- [CNLabelContactRelationElderBrother](cnlabelcontactrelationelderbrother.md): The label for the contact’s elder brother.
- [CNLabelContactRelationElderSibling](cnlabelcontactrelationeldersibling.md): The label for the contact’s elder sibling.
- [CNLabelContactRelationElderSister](cnlabelcontactrelationeldersister.md): The label for the contact’s elder sister.
- [CNLabelContactRelationEldestBrother](cnlabelcontactrelationeldestbrother.md): The label for the contact’s eldest brother.
- [CNLabelContactRelationEldestSister](cnlabelcontactrelationeldestsister.md): The label for the contact’s eldest sister.
- [CNLabelContactRelationFather](cnlabelcontactrelationfather.md): The label for the contact’s father.
- [CNLabelContactRelationFemalePartner](cnlabelcontactrelationfemalepartner.md): The label for the contact’s female partner.
- [CNLabelContactRelationHusband](cnlabelcontactrelationhusband.md): The label for the contact’s husband.
- [CNLabelContactRelationMalePartner](cnlabelcontactrelationmalepartner.md): The label for the contact’s male partner.
- [CNLabelContactRelationMother](cnlabelcontactrelationmother.md): The label for the contact’s mother.
- [CNLabelContactRelationParent](cnlabelcontactrelationparent.md): The label for the contact’s parent.
- [CNLabelContactRelationPartner](cnlabelcontactrelationpartner.md): The label for the contact’s partner.
- [CNLabelContactRelationSibling](cnlabelcontactrelationsibling.md): The label for the contact’s sibling.
- [CNLabelContactRelationSister](cnlabelcontactrelationsister.md): The label for the contact’s sister.
- [CNLabelContactRelationSon](cnlabelcontactrelationson.md): The label for the contact’s son.
- [CNLabelContactRelationSpouse](cnlabelcontactrelationspouse.md): The label for the contact’s spouse.
- [CNLabelContactRelationStepbrother](cnlabelcontactrelationstepbrother.md): The label for the contact’s stepbrother.
- [CNLabelContactRelationStepchild](cnlabelcontactrelationstepchild.md): The label for the contact’s stepchild.
- [CNLabelContactRelationStepdaughter](cnlabelcontactrelationstepdaughter.md): The label for the contact’s stepdaughter.
- [CNLabelContactRelationStepfather](cnlabelcontactrelationstepfather.md): The label for the contact’s stepfather.
- [CNLabelContactRelationStepmother](cnlabelcontactrelationstepmother.md): The label for the contact’s stepmother.
- [CNLabelContactRelationStepparent](cnlabelcontactrelationstepparent.md): The label for the contact’s stepparent.
- [CNLabelContactRelationStepsister](cnlabelcontactrelationstepsister.md): The label for the contact’s stepsister.
- [CNLabelContactRelationStepson](cnlabelcontactrelationstepson.md): The label for the contact’s stepson.
- [CNLabelContactRelationWife](cnlabelcontactrelationwife.md): The label for the contact’s wife.
- [CNLabelContactRelationYoungerBrother](cnlabelcontactrelationyoungerbrother.md): The label for the contact’s younger brother.
- [CNLabelContactRelationYoungerSibling](cnlabelcontactrelationyoungersibling.md): The label for the contact’s younger sibling.
- [CNLabelContactRelationYoungerSister](cnlabelcontactrelationyoungersister.md): The label for the contact’s younger sister.
- [CNLabelContactRelationYoungestBrother](cnlabelcontactrelationyoungestbrother.md): The label for the contact’s youngest brother.
- [CNLabelContactRelationYoungestSister](cnlabelcontactrelationyoungestsister.md): The label for the contact’s youngest sister.

### Getting acquaintance relationship labels

- [CNLabelContactRelationBoyfriend](cnlabelcontactrelationboyfriend.md): The label for the contact’s boyfriend.
- [CNLabelContactRelationColleague](cnlabelcontactrelationcolleague.md): The label for the contact’s colleague.
- [CNLabelContactRelationFemaleFriend](cnlabelcontactrelationfemalefriend.md): The label for the contact’s female friend.
- [CNLabelContactRelationFriend](cnlabelcontactrelationfriend.md): The label for the contact’s friend.
- [CNLabelContactRelationGirlfriend](cnlabelcontactrelationgirlfriend.md): The label for the contact’s girlfriend.
- [CNLabelContactRelationGirlfriendOrBoyfriend](cnlabelcontactrelationgirlfriendorboyfriend.md): The label for the contact’s girlfriend or boyfriend.
- [CNLabelContactRelationMaleFriend](cnlabelcontactrelationmalefriend.md): The label for the contact’s male friend.

### Getting business relationship labels

- [CNLabelContactRelationAssistant](cnlabelcontactrelationassistant.md): The label for the contact’s assistant.
- [CNLabelContactRelationManager](cnlabelcontactrelationmanager.md): The label for the contact’s manager.

### Getting education relationship labels

- [CNLabelContactRelationTeacher](cnlabelcontactrelationteacher.md): The label for the contact’s teacher.

### Getting in-law relationship labels

- [CNLabelContactRelationBrotherInLaw](cnlabelcontactrelationbrotherinlaw.md): The label for the contact’s brother-in-law.
- [CNLabelContactRelationBrotherInLawElderSistersHusband](cnlabelcontactrelationbrotherinlaweldersistershusband.md): The label for the contact’s elder sister’s husband.
- [CNLabelContactRelationBrotherInLawHusbandsBrother](cnlabelcontactrelationbrotherinlawhusbandsbrother.md): The label for the contact’s husband’s brother.
- [CNLabelContactRelationBrotherInLawHusbandsSistersHusband](cnlabelcontactrelationbrotherinlawhusbandssistershusband.md): The label for the contact’s husband’s sister’s husband.
- [CNLabelContactRelationBrotherInLawSistersHusband](cnlabelcontactrelationbrotherinlawsistershusband.md): The label for the contact’s sister’s husband.
- [CNLabelContactRelationBrotherInLawSpousesBrother](cnlabelcontactrelationbrotherinlawspousesbrother.md): The label for the contact’s spouse’s brother.
- [CNLabelContactRelationBrotherInLawWifesBrother](cnlabelcontactrelationbrotherinlawwifesbrother.md): The label for the contact’s wife’s brother.
- [CNLabelContactRelationBrotherInLawWifesSistersHusband](cnlabelcontactrelationbrotherinlawwifessistershusband.md): The label for the contact’s wife’s sister’s husband.
- [CNLabelContactRelationBrotherInLawYoungerSistersHusband](cnlabelcontactrelationbrotherinlawyoungersistershusband.md): The label for the contact’s younger sister’s husband.
- [CNLabelContactRelationChildInLaw](cnlabelcontactrelationchildinlaw.md): The label for the contact’s child-in-law.
- [CNLabelContactRelationCoBrotherInLaw](cnlabelcontactrelationcobrotherinlaw.md): The label for the contact’s co-brother-in-law.
- [CNLabelContactRelationCoFatherInLaw](cnlabelcontactrelationcofatherinlaw.md): The label for the contact’s co-father-in-law.
- [CNLabelContactRelationCoMotherInLaw](cnlabelcontactrelationcomotherinlaw.md): The label for the contact’s co-mother-in-law.
- [CNLabelContactRelationCoParentInLaw](cnlabelcontactrelationcoparentinlaw.md): The label for the contact’s co-parent-in-law.
- [CNLabelContactRelationCoSiblingInLaw](cnlabelcontactrelationcosiblinginlaw.md): The label for the contact’s co-sibling-in-law.
- [CNLabelContactRelationCoSisterInLaw](cnlabelcontactrelationcosisterinlaw.md): The label for the contact’s co-sister-in-law.
- [CNLabelContactRelationElderBrotherInLaw](cnlabelcontactrelationelderbrotherinlaw.md): The label for the contact’s elder brother-in-law.
- [CNLabelContactRelationElderSiblingInLaw](cnlabelcontactrelationeldersiblinginlaw.md): The label for the contact’s elder sibling-in-law.
- [CNLabelContactRelationElderSisterInLaw](cnlabelcontactrelationeldersisterinlaw.md): The label for the contact’s elder sister-in-law.
- [CNLabelContactRelationFatherInLaw](cnlabelcontactrelationfatherinlaw.md): The label for the contact’s father-in-law.
- [CNLabelContactRelationFatherInLawHusbandsFather](cnlabelcontactrelationfatherinlawhusbandsfather.md): The label for the contact’s husband’s father.
- [CNLabelContactRelationFatherInLawOrStepfather](cnlabelcontactrelationfatherinlaworstepfather.md): The label for the contact’s father-in-law or stepfather.
- [CNLabelContactRelationFatherInLawWifesFather](cnlabelcontactrelationfatherinlawwifesfather.md): The label for the contact’s wife’s father.
- [CNLabelContactRelationMotherInLaw](cnlabelcontactrelationmotherinlaw.md): The label for the contact’s mother-in-law.
- [CNLabelContactRelationMotherInLawHusbandsMother](cnlabelcontactrelationmotherinlawhusbandsmother.md): The label for the contact’s husband’s mother.
- [CNLabelContactRelationMotherInLawOrStepmother](cnlabelcontactrelationmotherinlaworstepmother.md): The label for the contact’s mother-in-law or stepmother.
- [CNLabelContactRelationMotherInLawWifesMother](cnlabelcontactrelationmotherinlawwifesmother.md): The label for the contact’s wife’s mother.
- [CNLabelContactRelationParentInLaw](cnlabelcontactrelationparentinlaw.md): The label for the contact’s parent-in-law.
- [CNLabelContactRelationSiblingInLaw](cnlabelcontactrelationsiblinginlaw.md): The label for the contact’s sibling-in-law.
- [CNLabelContactRelationSisterInLaw](cnlabelcontactrelationsisterinlaw.md): The label for the contact’s sister-in-law.
- [CNLabelContactRelationSisterInLawBrothersWife](cnlabelcontactrelationsisterinlawbrotherswife.md): The label for the contact’s brother’s wife.
- [CNLabelContactRelationSisterInLawElderBrothersWife](cnlabelcontactrelationsisterinlawelderbrotherswife.md): The label for the contact’s elder brother’s wife.
- [CNLabelContactRelationSisterInLawHusbandsBrothersWife](cnlabelcontactrelationsisterinlawhusbandsbrotherswife.md): The label for the contact’s husband’s brother’s wife.
- [CNLabelContactRelationSisterInLawHusbandsSister](cnlabelcontactrelationsisterinlawhusbandssister.md): The label for the contact’s husband’s sister.
- [CNLabelContactRelationSisterInLawSpousesSister](cnlabelcontactrelationsisterinlawspousessister.md): The label for the contact’s spouse’s sister.
- [CNLabelContactRelationSisterInLawWifesBrothersWife](cnlabelcontactrelationsisterinlawwifesbrotherswife.md): The label for the contact’s wife’s brother’s wife.
- [CNLabelContactRelationSisterInLawWifesSister](cnlabelcontactrelationsisterinlawwifessister.md): The label for the contact’s wife’s sister.
- [CNLabelContactRelationSisterInLawYoungerBrothersWife](cnlabelcontactrelationsisterinlawyoungerbrotherswife.md): The label for the contact’s younger brother’s wife.
- [CNLabelContactRelationYoungerBrotherInLaw](cnlabelcontactrelationyoungerbrotherinlaw.md): The label for the contact’s younger brother-in-law.
- [CNLabelContactRelationYoungerSiblingInLaw](cnlabelcontactrelationyoungersiblinginlaw.md): The label for the contact’s younger sibling-in-law.
- [CNLabelContactRelationYoungerSisterInLaw](cnlabelcontactrelationyoungersisterinlaw.md): The label for the contact’s younger sister-in-law.

### Getting extended family relationship labels

- [CNLabelContactRelationAunt](cnlabelcontactrelationaunt.md): The label for the contact’s aunt.
- [CNLabelContactRelationAuntFathersBrothersWife](cnlabelcontactrelationauntfathersbrotherswife.md): The label for the contact’s father’s brother’s wife.
- [CNLabelContactRelationAuntFathersElderBrothersWife](cnlabelcontactrelationauntfatherselderbrotherswife.md): The label for the contact’s father’s elder brother’s wife.
- [CNLabelContactRelationAuntFathersElderSister](cnlabelcontactrelationauntfatherseldersister.md): The label for the contact’s father’s elder sister.
- [CNLabelContactRelationAuntFathersSister](cnlabelcontactrelationauntfatherssister.md): The label for the contact’s father’s sister.
- [CNLabelContactRelationAuntFathersYoungerBrothersWife](cnlabelcontactrelationauntfathersyoungerbrotherswife.md): The label for the contact’s father’s younger brother’s wife.
- [CNLabelContactRelationAuntFathersYoungerSister](cnlabelcontactrelationauntfathersyoungersister.md): The label for the contact’s father’s younger sister.
- [CNLabelContactRelationAuntMothersBrothersWife](cnlabelcontactrelationauntmothersbrotherswife.md): The label for the contact’s mother’s brother’s wife.
- [CNLabelContactRelationAuntMothersElderSister](cnlabelcontactrelationauntmotherseldersister.md): The label for the contact’s mother’s elder sister.
- [CNLabelContactRelationAuntMothersSister](cnlabelcontactrelationauntmotherssister.md): The label for the contact’s mother’s sister.
- [CNLabelContactRelationAuntMothersYoungerSister](cnlabelcontactrelationauntmothersyoungersister.md): The label for the contact’s mother’s younger sister.
- [CNLabelContactRelationAuntParentsElderSister](cnlabelcontactrelationauntparentseldersister.md): The label for the contact’s parent’s elder sister.
- [CNLabelContactRelationAuntParentsSister](cnlabelcontactrelationauntparentssister.md): The label for the contact’s parent’s sister.
- [CNLabelContactRelationAuntParentsYoungerSister](cnlabelcontactrelationauntparentsyoungersister.md): The label for the contact’s parent’s younger sister.
- [CNLabelContactRelationCousin](cnlabelcontactrelationcousin.md): The label for the contact’s cousin.
- [CNLabelContactRelationCousinFathersBrothersDaughter](cnlabelcontactrelationcousinfathersbrothersdaughter.md): The label for the contact’s father’s brother’s daughter.
- [CNLabelContactRelationCousinFathersBrothersSon](cnlabelcontactrelationcousinfathersbrothersson.md): The label for the contact’s father’s brother’s son.
- [CNLabelContactRelationCousinFathersSistersDaughter](cnlabelcontactrelationcousinfatherssistersdaughter.md): The label for the contact’s father’s sister’s daughter.
- [CNLabelContactRelationCousinFathersSistersSon](cnlabelcontactrelationcousinfatherssistersson.md): The label for the contact’s father’s sister’s son.
- [CNLabelContactRelationCousinGrandparentsSiblingsChild](cnlabelcontactrelationcousingrandparentssiblingschild.md): The label for the contact’s grandparent’s sibling’s child.
- [CNLabelContactRelationCousinGrandparentsSiblingsDaughter](cnlabelcontactrelationcousingrandparentssiblingsdaughter.md): The label for the contact’s grandparent’s sibling’s daughter.
- [CNLabelContactRelationCousinGrandparentsSiblingsSon](cnlabelcontactrelationcousingrandparentssiblingsson.md): The label for the contact’s grandparent’s sibling’s son.
- [CNLabelContactRelationCousinMothersBrothersDaughter](cnlabelcontactrelationcousinmothersbrothersdaughter.md): The label for the contact’s mother’s brother’s daughter.
- [CNLabelContactRelationCousinMothersBrothersSon](cnlabelcontactrelationcousinmothersbrothersson.md): The label for the contact’s mother’s brother’s son.
- [CNLabelContactRelationCousinMothersSistersDaughter](cnlabelcontactrelationcousinmotherssistersdaughter.md): The label for the contact’s mother’s sister’s daughter.
- [CNLabelContactRelationCousinMothersSistersSon](cnlabelcontactrelationcousinmotherssistersson.md): The label for the contact’s mother’s sister’s son.
- [CNLabelContactRelationCousinOrSiblingsChild](cnlabelcontactrelationcousinorsiblingschild.md): The label for the contact’s cousin’s or sibling’s child.
- [CNLabelContactRelationCousinParentsSiblingsChild](cnlabelcontactrelationcousinparentssiblingschild.md): The label for the contact’s parent’s sibling’s child.
- [CNLabelContactRelationCousinParentsSiblingsDaughter](cnlabelcontactrelationcousinparentssiblingsdaughter.md): The label for the contact’s parent’s sibling’s daughter.
- [CNLabelContactRelationCousinParentsSiblingsSon](cnlabelcontactrelationcousinparentssiblingsson.md): The label for the contact’s parent’s sibling’s son.
- [CNLabelContactRelationDaughterInLaw](cnlabelcontactrelationdaughterinlaw.md): The label for the contact’s daughter-in-law.
- [CNLabelContactRelationDaughterInLawOrSisterInLaw](cnlabelcontactrelationdaughterinlaworsisterinlaw.md): The label for the contact’s daughter-in-law or sister-in-law.
- [CNLabelContactRelationDaughterInLawOrStepdaughter](cnlabelcontactrelationdaughterinlaworstepdaughter.md): The label for the contact’s daughter-in-law or stepdaughter.
- [CNLabelContactRelationElderCousin](cnlabelcontactrelationeldercousin.md): The label for the contact’s elder cousin.
- [CNLabelContactRelationElderCousinFathersBrothersDaughter](cnlabelcontactrelationeldercousinfathersbrothersdaughter.md): The label for the contact’s father’s brother’s daughter.
- [CNLabelContactRelationElderCousinFathersBrothersSon](cnlabelcontactrelationeldercousinfathersbrothersson.md): The label for the contact’s father’s brother’s son.
- [CNLabelContactRelationElderCousinFathersSistersDaughter](cnlabelcontactrelationeldercousinfatherssistersdaughter.md): The label for the contact’s father’s sister’s daughter.
- [CNLabelContactRelationElderCousinFathersSistersSon](cnlabelcontactrelationeldercousinfatherssistersson.md): The label for the contact’s father’s sister’s son.
- [CNLabelContactRelationElderCousinMothersBrothersDaughter](cnlabelcontactrelationeldercousinmothersbrothersdaughter.md): The label for the contact’s mother’s brother’s daughter.
- [CNLabelContactRelationElderCousinMothersBrothersSon](cnlabelcontactrelationeldercousinmothersbrothersson.md): The label for the contact’s mother’s brother’s son.
- [CNLabelContactRelationElderCousinMothersSiblingsDaughterOrFathersSistersDaughter](cnlabelcontactrelationeldercousinmotherssiblingsdaughterorfatherssistersdaughter.md): The label for the contact’s mother’s sibling’s daughter or father’s sister’s daughter.
- [CNLabelContactRelationElderCousinMothersSiblingsSonOrFathersSistersSon](cnlabelcontactrelationeldercousinmotherssiblingssonorfatherssistersson.md): The label for the contact’s mother’s sibling’s son or father’s sister’s son.
- [CNLabelContactRelationElderCousinMothersSistersDaughter](cnlabelcontactrelationeldercousinmotherssistersdaughter.md): The label for the contact’s mother’s sister’s daughter.
- [CNLabelContactRelationElderCousinMothersSistersSon](cnlabelcontactrelationeldercousinmotherssistersson.md): The label for the contact’s mother’s sister’s son.
- [CNLabelContactRelationElderCousinParentsSiblingsDaughter](cnlabelcontactrelationeldercousinparentssiblingsdaughter.md): The label for the contact’s parent’s sibling’s daughter.
- [CNLabelContactRelationElderCousinParentsSiblingsSon](cnlabelcontactrelationeldercousinparentssiblingsson.md): The label for the contact’s parent’s sibling’s son.
- [CNLabelContactRelationFemaleCousin](cnlabelcontactrelationfemalecousin.md): The label for the contact’s female cousin.
- [CNLabelContactRelationGrandaunt](cnlabelcontactrelationgrandaunt.md): The label for the contact’s grandaunt.
- [CNLabelContactRelationGrandchild](cnlabelcontactrelationgrandchild.md): The label for the contact’s grandchild.
- [CNLabelContactRelationGrandchildOrSiblingsChild](cnlabelcontactrelationgrandchildorsiblingschild.md): The label for the contact’s grandchild or sibling’s child.
- [CNLabelContactRelationGranddaughter](cnlabelcontactrelationgranddaughter.md): The label for the contact’s granddaughter.
- [CNLabelContactRelationGranddaughterDaughtersDaughter](cnlabelcontactrelationgranddaughterdaughtersdaughter.md): The label for the contact’s daughter’s daughter.
- [CNLabelContactRelationGranddaughterSonsDaughter](cnlabelcontactrelationgranddaughtersonsdaughter.md): The label for the contact’s son’s daughter.
- [CNLabelContactRelationGranddaughterOrNiece](cnlabelcontactrelationgranddaughterorniece.md): The label for the contact’s granddaughter or niece.
- [CNLabelContactRelationGrandfather](cnlabelcontactrelationgrandfather.md): The label for the contact’s grandfather.
- [CNLabelContactRelationGrandfatherFathersFather](cnlabelcontactrelationgrandfatherfathersfather.md): The label for the contact’s father’s father.
- [CNLabelContactRelationGrandfatherMothersFather](cnlabelcontactrelationgrandfathermothersfather.md): The label for the contact’s mother’s father.
- [CNLabelContactRelationGrandmother](cnlabelcontactrelationgrandmother.md): The label for the contact’s grandmother.
- [CNLabelContactRelationGrandmotherFathersMother](cnlabelcontactrelationgrandmotherfathersmother.md): The label for the contact’s father’s mother.
- [CNLabelContactRelationGrandmotherMothersMother](cnlabelcontactrelationgrandmothermothersmother.md): The label for the contact’s mother’s mother.
- [CNLabelContactRelationGrandnephew](cnlabelcontactrelationgrandnephew.md): The label for the contact’s grandnephew.
- [CNLabelContactRelationGrandnephewBrothersGrandson](cnlabelcontactrelationgrandnephewbrothersgrandson.md): The label for the contact’s brother’s grandson.
- [CNLabelContactRelationGrandnephewSistersGrandson](cnlabelcontactrelationgrandnephewsistersgrandson.md): The label for the contact’s sister’s grandson.
- [CNLabelContactRelationGrandniece](cnlabelcontactrelationgrandniece.md): The label for the contact’s grandniece.
- [CNLabelContactRelationGrandnieceBrothersGranddaughter](cnlabelcontactrelationgrandniecebrothersgranddaughter.md): The label for the contact’s brother’s granddaughter.
- [CNLabelContactRelationGrandnieceSistersGranddaughter](cnlabelcontactrelationgrandniecesistersgranddaughter.md): The label for the contact’s sister’s granddaughter.
- [CNLabelContactRelationGrandparent](cnlabelcontactrelationgrandparent.md): The label for the contact’s grandparent.
- [CNLabelContactRelationGrandson](cnlabelcontactrelationgrandson.md): The label for the contact’s grandson.
- [CNLabelContactRelationGrandsonDaughtersSon](cnlabelcontactrelationgrandsondaughtersson.md): The label for the contact’s daughter’s son.
- [CNLabelContactRelationGrandsonSonsSon](cnlabelcontactrelationgrandsonsonsson.md): The label for the contact’s son’s son.
- [CNLabelContactRelationGrandsonOrNephew](cnlabelcontactrelationgrandsonornephew.md): The label for the contact’s grandson or nephew.
- [CNLabelContactRelationGranduncle](cnlabelcontactrelationgranduncle.md): The label for the contact’s granduncle.
- [CNLabelContactRelationGreatGrandchild](cnlabelcontactrelationgreatgrandchild.md): The label for the contact’s grandchild.
- [CNLabelContactRelationGreatGrandchildOrSiblingsGrandchild](cnlabelcontactrelationgreatgrandchildorsiblingsgrandchild.md): The label for the contact’s grandchild or sibling’s grandchild.
- [CNLabelContactRelationGreatGranddaughter](cnlabelcontactrelationgreatgranddaughter.md): The label for the contact’s great-granddaughter.
- [CNLabelContactRelationGreatGrandfather](cnlabelcontactrelationgreatgrandfather.md): The label for the contact’s great-grandfather.
- [CNLabelContactRelationGreatGrandmother](cnlabelcontactrelationgreatgrandmother.md): The label for the contact’s great-grandmother.
- [CNLabelContactRelationGreatGrandparent](cnlabelcontactrelationgreatgrandparent.md): The label for the contact’s great-grandparent.
- [CNLabelContactRelationGreatGrandson](cnlabelcontactrelationgreatgrandson.md): The label for the contact’s great-grandson.
- [CNLabelContactRelationMaleCousin](cnlabelcontactrelationmalecousin.md): The label for the contact’s male cousin.
- [CNLabelContactRelationNephew](cnlabelcontactrelationnephew.md): The label for the contact’s nephew.
- [CNLabelContactRelationNephewBrothersSon](cnlabelcontactrelationnephewbrothersson.md): The label for the contact’s brother’s son.
- [CNLabelContactRelationNephewBrothersSonOrHusbandsSiblingsSon](cnlabelcontactrelationnephewbrotherssonorhusbandssiblingsson.md): The label for the contact’s brother’s son or husband’s sibling’s son.
- [CNLabelContactRelationNephewOrCousin](cnlabelcontactrelationnepheworcousin.md): The label for the contact’s nephew or cousin.
- [CNLabelContactRelationNephewSistersSon](cnlabelcontactrelationnephewsistersson.md): The label for the contact’s sister’s son.
- [CNLabelContactRelationNephewSistersSonOrWifesSiblingsSon](cnlabelcontactrelationnephewsisterssonorwifessiblingsson.md): The label for the contact’s sister’s son or wife’s sibling’s son.
- [CNLabelContactRelationNiece](cnlabelcontactrelationniece.md): The label for the contact’s niece.
- [CNLabelContactRelationNieceBrothersDaughter](cnlabelcontactrelationniecebrothersdaughter.md): The label for the contact’s brother’s daughter.
- [CNLabelContactRelationNieceBrothersDaughterOrHusbandsSiblingsDaughter](cnlabelcontactrelationniecebrothersdaughterorhusbandssiblingsdaughter.md): The label for the contact’s brother’s daughter or husband’s sibling’s daughter.
- [CNLabelContactRelationNieceOrCousin](cnlabelcontactrelationnieceorcousin.md): The label for the contact’s niece or cousin.
- [CNLabelContactRelationNieceSistersDaughter](cnlabelcontactrelationniecesistersdaughter.md): The label for the contact’s sister’s daughter.
- [CNLabelContactRelationNieceSistersDaughterOrWifesSiblingsDaughter](cnlabelcontactrelationniecesistersdaughterorwifessiblingsdaughter.md): The label for the contact’s sister’s daughter or wife’s sibling’s daughter.
- [CNLabelContactRelationParentsElderSibling](cnlabelcontactrelationparentseldersibling.md): The label for the contact’s parent’s elder sibling.
- [CNLabelContactRelationParentsSibling](cnlabelcontactrelationparentssibling.md): The label for the contact’s parent’s sibling.
- [CNLabelContactRelationParentsSiblingFathersElderSibling](cnlabelcontactrelationparentssiblingfatherseldersibling.md): The label for the contact’s father’s elder sibling.
- [CNLabelContactRelationParentsSiblingFathersSibling](cnlabelcontactrelationparentssiblingfatherssibling.md): The label for the contact’s father’s sibling.
- [CNLabelContactRelationParentsSiblingFathersYoungerSibling](cnlabelcontactrelationparentssiblingfathersyoungersibling.md): The label for the contact’s father’s youngest sibling.
- [CNLabelContactRelationParentsSiblingMothersElderSibling](cnlabelcontactrelationparentssiblingmotherseldersibling.md): The label for the contact’s mother’s elder sibling.
- [CNLabelContactRelationParentsSiblingMothersSibling](cnlabelcontactrelationparentssiblingmotherssibling.md): The label for the contact’s mother’s sibling.
- [CNLabelContactRelationParentsSiblingMothersYoungerSibling](cnlabelcontactrelationparentssiblingmothersyoungersibling.md): The label for the contact’s mother’s younger sibling.
- [CNLabelContactRelationParentsYoungerSibling](cnlabelcontactrelationparentsyoungersibling.md): The label for the contact’s parent’s younger sibling.
- [CNLabelContactRelationSiblingsChild](cnlabelcontactrelationsiblingschild.md): The label for the contact’s sibling’s child.
- [CNLabelContactRelationSonInLaw](cnlabelcontactrelationsoninlaw.md): The label for the contact’s son-in-law.
- [CNLabelContactRelationSonInLawOrBrotherInLaw](cnlabelcontactrelationsoninlaworbrotherinlaw.md): The label for the contact’s son-in-law or brother-in-law.
- [CNLabelContactRelationSonInLawOrStepson](cnlabelcontactrelationsoninlaworstepson.md): The label for the contact’s son-in-law or stepson.
- [CNLabelContactRelationUncle](cnlabelcontactrelationuncle.md): The label for the contact’s uncle.
- [CNLabelContactRelationUncleFathersBrother](cnlabelcontactrelationunclefathersbrother.md): The label for the contact’s father’s brother.
- [CNLabelContactRelationUncleFathersElderBrother](cnlabelcontactrelationunclefatherselderbrother.md): The label for the contact’s father’s elder brother.
- [CNLabelContactRelationUncleFathersElderSistersHusband](cnlabelcontactrelationunclefatherseldersistershusband.md): The label for the contact’s elder sister’s husband.
- [CNLabelContactRelationUncleFathersSistersHusband](cnlabelcontactrelationunclefatherssistershusband.md): The label for the contact’s father’s sister’s husband.
- [CNLabelContactRelationUncleFathersYoungerBrother](cnlabelcontactrelationunclefathersyoungerbrother.md): The label for the contact’s father’s younger brother.
- [CNLabelContactRelationUncleFathersYoungerSistersHusband](cnlabelcontactrelationunclefathersyoungersistershusband.md): The label for the contact’s father’s younger sister’s husband.
- [CNLabelContactRelationUncleMothersBrother](cnlabelcontactrelationunclemothersbrother.md): The label for the contact’s mother’s brother.
- [CNLabelContactRelationUncleMothersElderBrother](cnlabelcontactrelationunclemotherselderbrother.md): The label for the contact’s mother’s elder brother.
- [CNLabelContactRelationUncleMothersSistersHusband](cnlabelcontactrelationunclemotherssistershusband.md): The label for the contact’s mother’s sister’s husband.
- [CNLabelContactRelationUncleMothersYoungerBrother](cnlabelcontactrelationunclemothersyoungerbrother.md): The label for the contact’s mother’s younger brother.
- [CNLabelContactRelationUncleParentsBrother](cnlabelcontactrelationuncleparentsbrother.md): The label for the contact’s parent’s brother.
- [CNLabelContactRelationUncleParentsElderBrother](cnlabelcontactrelationuncleparentselderbrother.md): The label for the contact’s parent’s elder brother.
- [CNLabelContactRelationUncleParentsYoungerBrother](cnlabelcontactrelationuncleparentsyoungerbrother.md): The label for the contact’s parent’s younger brother.
- [CNLabelContactRelationYoungerCousin](cnlabelcontactrelationyoungercousin.md): The label for the contact’s younger cousin.
- [CNLabelContactRelationYoungerCousinFathersBrothersDaughter](cnlabelcontactrelationyoungercousinfathersbrothersdaughter.md): The label for the contact’s father’s brother’s younger daughter.
- [CNLabelContactRelationYoungerCousinFathersBrothersSon](cnlabelcontactrelationyoungercousinfathersbrothersson.md): The label for the contact’s father’s brother’s younger son.
- [CNLabelContactRelationYoungerCousinFathersSistersDaughter](cnlabelcontactrelationyoungercousinfatherssistersdaughter.md): The label for the contact’s father’s sister’s younger daughter.
- [CNLabelContactRelationYoungerCousinFathersSistersSon](cnlabelcontactrelationyoungercousinfatherssistersson.md): The label for the contact’s father’s sister’s younger son.
- [CNLabelContactRelationYoungerCousinMothersBrothersDaughter](cnlabelcontactrelationyoungercousinmothersbrothersdaughter.md): The label for the contact’s mother’s brother’s younger daughter.
- [CNLabelContactRelationYoungerCousinMothersBrothersSon](cnlabelcontactrelationyoungercousinmothersbrothersson.md): The label for the contact’s mother’s brother’s younger son.
- [CNLabelContactRelationYoungerCousinMothersSiblingsDaughterOrFathersSistersDaughter](cnlabelcontactrelationyoungercousinmotherssiblingsdaughterorfatherssistersdaughter.md): The label for the contact’s mother’s sibling’s younger daughter or father’s sister’s younger daughter.
- [CNLabelContactRelationYoungerCousinMothersSiblingsSonOrFathersSistersSon](cnlabelcontactrelationyoungercousinmotherssiblingssonorfatherssistersson.md): The label for the contact’s mother’s sibling’s younger son or father’s sister’s younger son.
- [CNLabelContactRelationYoungerCousinMothersSistersDaughter](cnlabelcontactrelationyoungercousinmotherssistersdaughter.md): The label for the contact’s mother’s sister’s younger daughter.
- [CNLabelContactRelationYoungerCousinMothersSistersSon](cnlabelcontactrelationyoungercousinmotherssistersson.md): The label for the contact’s mother’s sister’s younger son.
- [CNLabelContactRelationYoungerCousinParentsSiblingsDaughter](cnlabelcontactrelationyoungercousinparentssiblingsdaughter.md): The label for the contact’s parent’s sibling’s younger daughter.
- [CNLabelContactRelationYoungerCousinParentsSiblingsSon](cnlabelcontactrelationyoungercousinparentssiblingsson.md): The label for the contact’s parent’s sibling’s younger son.

### Initializers

- [init(coder:)](cnlabeledvalue/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Generic Types

- [CNContactProperty](cncontactproperty.md): An object that represents a property of a contact.

# CNLabeledValue (Objective-C)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An immutable object that combines a contact property value with a label that describes that property.

## Declaration

```objectivec
@interface CNLabeledValue : NSObject
```

<a id="overview"></a>

## Overview

Labels describe the context for a property. For example, the label for a phone number indicates whether it corresponds to the user’s home, work, or iPhone number.

`CNLabeledValue` objects are thread-safe, and you can access their properties from any thread of your app.

## Topics

### Creating a labeled value

- [initWithLabel:value:](cnlabeledvalue/init%28label_value_%29.md): Returns a new labeled value identifier.
- [labeledValueWithLabel:value:](cnlabeledvalue/labeledvaluewithlabel_value_.md): Returns a new labeled value identifier.

### Getting the label and value

- [label](cnlabeledvalue/label.md): The label for a contact property value.
- [value](cnlabeledvalue/value.md): A contact property value.

### Setting labels and values

- [labeledValueBySettingLabel:](cnlabeledvalue/settinglabel%28__%29.md): Returns a labeled value object with an existing value and identifier.
- [labeledValueBySettingLabel:value:](cnlabeledvalue/settinglabel%28__value_%29.md): Returns a labeled value object with the specified label and value with the existing identifier.
- [labeledValueBySettingValue:](cnlabeledvalue/settingvalue%28__%29.md): Returns a new value for an existing label and identifier.

### Localizing the label and value

- [localizedStringForLabel:](cnlabeledvalue/localizedstring%28forlabel_%29.md): Returns a localized string for the specified label.

### Getting the unique identifier

- [identifier](cnlabeledvalue/identifier.md): A unique identifier for the labeled value object.

### Getting common labels

- [CNLabelHome](cnlabelhome.md): The label for identifying home information.
- [CNLabelWork](cnlabelwork.md): The label for identifying work information.
- [CNLabelSchool](cnlabelschool.md): The label for the contact’s school.
- [CNLabelOther](cnlabelother.md): The label for identifying other information.
- [CNLabelEmailiCloud](cnlabelemailicloud.md): The label for identifying the contact’s iCloud email information.
- [CNLabelURLAddressHomePage](cnlabelurladdresshomepage.md): The label for identifying URL information.
- [CNLabelDateAnniversary](cnlabeldateanniversary.md): The label for identifying the contact’s anniversary date.

### Getting phone number labels

- [CNLabelPhoneNumberMain](cnlabelphonenumbermain.md): The label for identifying the contact’s main phone number.
- [CNLabelPhoneNumberiPhone](cnlabelphonenumberiphone.md): The label for identifying the contact’s iPhone number.
- [CNLabelPhoneNumberAppleWatch](cnlabelphonenumberapplewatch.md): The label for identifying the contact’s Apple Watch phone number.
- [CNLabelPhoneNumberMobile](cnlabelphonenumbermobile.md): The label for identifying the contact’s mobile phone number.
- [CNLabelPhoneNumberPager](cnlabelphonenumberpager.md): The label for identifying the contact’s pager number.
- [CNLabelPhoneNumberWorkFax](cnlabelphonenumberworkfax.md): The label for identifying the contact’s work fax number.
- [CNLabelPhoneNumberHomeFax](cnlabelphonenumberhomefax.md): The label for identifying the contact’s home fax number.
- [CNLabelPhoneNumberOtherFax](cnlabelphonenumberotherfax.md): The label for identifying another fax number.

### Getting immediate family relationship labels

- [CNLabelContactRelationBrother](cnlabelcontactrelationbrother.md): The label for the contact’s brother.
- [CNLabelContactRelationChild](cnlabelcontactrelationchild.md): The label for the contact’s child.
- [CNLabelContactRelationDaughter](cnlabelcontactrelationdaughter.md): The label for the contact’s daughter.
- [CNLabelContactRelationElderBrother](cnlabelcontactrelationelderbrother.md): The label for the contact’s elder brother.
- [CNLabelContactRelationElderSibling](cnlabelcontactrelationeldersibling.md): The label for the contact’s elder sibling.
- [CNLabelContactRelationElderSister](cnlabelcontactrelationeldersister.md): The label for the contact’s elder sister.
- [CNLabelContactRelationEldestBrother](cnlabelcontactrelationeldestbrother.md): The label for the contact’s eldest brother.
- [CNLabelContactRelationEldestSister](cnlabelcontactrelationeldestsister.md): The label for the contact’s eldest sister.
- [CNLabelContactRelationFather](cnlabelcontactrelationfather.md): The label for the contact’s father.
- [CNLabelContactRelationFemalePartner](cnlabelcontactrelationfemalepartner.md): The label for the contact’s female partner.
- [CNLabelContactRelationHusband](cnlabelcontactrelationhusband.md): The label for the contact’s husband.
- [CNLabelContactRelationMalePartner](cnlabelcontactrelationmalepartner.md): The label for the contact’s male partner.
- [CNLabelContactRelationMother](cnlabelcontactrelationmother.md): The label for the contact’s mother.
- [CNLabelContactRelationParent](cnlabelcontactrelationparent.md): The label for the contact’s parent.
- [CNLabelContactRelationPartner](cnlabelcontactrelationpartner.md): The label for the contact’s partner.
- [CNLabelContactRelationSibling](cnlabelcontactrelationsibling.md): The label for the contact’s sibling.
- [CNLabelContactRelationSister](cnlabelcontactrelationsister.md): The label for the contact’s sister.
- [CNLabelContactRelationSon](cnlabelcontactrelationson.md): The label for the contact’s son.
- [CNLabelContactRelationSpouse](cnlabelcontactrelationspouse.md): The label for the contact’s spouse.
- [CNLabelContactRelationStepbrother](cnlabelcontactrelationstepbrother.md): The label for the contact’s stepbrother.
- [CNLabelContactRelationStepchild](cnlabelcontactrelationstepchild.md): The label for the contact’s stepchild.
- [CNLabelContactRelationStepdaughter](cnlabelcontactrelationstepdaughter.md): The label for the contact’s stepdaughter.
- [CNLabelContactRelationStepfather](cnlabelcontactrelationstepfather.md): The label for the contact’s stepfather.
- [CNLabelContactRelationStepmother](cnlabelcontactrelationstepmother.md): The label for the contact’s stepmother.
- [CNLabelContactRelationStepparent](cnlabelcontactrelationstepparent.md): The label for the contact’s stepparent.
- [CNLabelContactRelationStepsister](cnlabelcontactrelationstepsister.md): The label for the contact’s stepsister.
- [CNLabelContactRelationStepson](cnlabelcontactrelationstepson.md): The label for the contact’s stepson.
- [CNLabelContactRelationWife](cnlabelcontactrelationwife.md): The label for the contact’s wife.
- [CNLabelContactRelationYoungerBrother](cnlabelcontactrelationyoungerbrother.md): The label for the contact’s younger brother.
- [CNLabelContactRelationYoungerSibling](cnlabelcontactrelationyoungersibling.md): The label for the contact’s younger sibling.
- [CNLabelContactRelationYoungerSister](cnlabelcontactrelationyoungersister.md): The label for the contact’s younger sister.
- [CNLabelContactRelationYoungestBrother](cnlabelcontactrelationyoungestbrother.md): The label for the contact’s youngest brother.
- [CNLabelContactRelationYoungestSister](cnlabelcontactrelationyoungestsister.md): The label for the contact’s youngest sister.

### Getting acquaintance relationship labels

- [CNLabelContactRelationBoyfriend](cnlabelcontactrelationboyfriend.md): The label for the contact’s boyfriend.
- [CNLabelContactRelationColleague](cnlabelcontactrelationcolleague.md): The label for the contact’s colleague.
- [CNLabelContactRelationFemaleFriend](cnlabelcontactrelationfemalefriend.md): The label for the contact’s female friend.
- [CNLabelContactRelationFriend](cnlabelcontactrelationfriend.md): The label for the contact’s friend.
- [CNLabelContactRelationGirlfriend](cnlabelcontactrelationgirlfriend.md): The label for the contact’s girlfriend.
- [CNLabelContactRelationGirlfriendOrBoyfriend](cnlabelcontactrelationgirlfriendorboyfriend.md): The label for the contact’s girlfriend or boyfriend.
- [CNLabelContactRelationMaleFriend](cnlabelcontactrelationmalefriend.md): The label for the contact’s male friend.

### Getting business relationship labels

- [CNLabelContactRelationAssistant](cnlabelcontactrelationassistant.md): The label for the contact’s assistant.
- [CNLabelContactRelationManager](cnlabelcontactrelationmanager.md): The label for the contact’s manager.

### Getting education relationship labels

- [CNLabelContactRelationTeacher](cnlabelcontactrelationteacher.md): The label for the contact’s teacher.

### Getting in-law relationship labels

- [CNLabelContactRelationBrotherInLaw](cnlabelcontactrelationbrotherinlaw.md): The label for the contact’s brother-in-law.
- [CNLabelContactRelationBrotherInLawElderSistersHusband](cnlabelcontactrelationbrotherinlaweldersistershusband.md): The label for the contact’s elder sister’s husband.
- [CNLabelContactRelationBrotherInLawHusbandsBrother](cnlabelcontactrelationbrotherinlawhusbandsbrother.md): The label for the contact’s husband’s brother.
- [CNLabelContactRelationBrotherInLawHusbandsSistersHusband](cnlabelcontactrelationbrotherinlawhusbandssistershusband.md): The label for the contact’s husband’s sister’s husband.
- [CNLabelContactRelationBrotherInLawSistersHusband](cnlabelcontactrelationbrotherinlawsistershusband.md): The label for the contact’s sister’s husband.
- [CNLabelContactRelationBrotherInLawSpousesBrother](cnlabelcontactrelationbrotherinlawspousesbrother.md): The label for the contact’s spouse’s brother.
- [CNLabelContactRelationBrotherInLawWifesBrother](cnlabelcontactrelationbrotherinlawwifesbrother.md): The label for the contact’s wife’s brother.
- [CNLabelContactRelationBrotherInLawWifesSistersHusband](cnlabelcontactrelationbrotherinlawwifessistershusband.md): The label for the contact’s wife’s sister’s husband.
- [CNLabelContactRelationBrotherInLawYoungerSistersHusband](cnlabelcontactrelationbrotherinlawyoungersistershusband.md): The label for the contact’s younger sister’s husband.
- [CNLabelContactRelationChildInLaw](cnlabelcontactrelationchildinlaw.md): The label for the contact’s child-in-law.
- [CNLabelContactRelationCoBrotherInLaw](cnlabelcontactrelationcobrotherinlaw.md): The label for the contact’s co-brother-in-law.
- [CNLabelContactRelationCoFatherInLaw](cnlabelcontactrelationcofatherinlaw.md): The label for the contact’s co-father-in-law.
- [CNLabelContactRelationCoMotherInLaw](cnlabelcontactrelationcomotherinlaw.md): The label for the contact’s co-mother-in-law.
- [CNLabelContactRelationCoParentInLaw](cnlabelcontactrelationcoparentinlaw.md): The label for the contact’s co-parent-in-law.
- [CNLabelContactRelationCoSiblingInLaw](cnlabelcontactrelationcosiblinginlaw.md): The label for the contact’s co-sibling-in-law.
- [CNLabelContactRelationCoSisterInLaw](cnlabelcontactrelationcosisterinlaw.md): The label for the contact’s co-sister-in-law.
- [CNLabelContactRelationElderBrotherInLaw](cnlabelcontactrelationelderbrotherinlaw.md): The label for the contact’s elder brother-in-law.
- [CNLabelContactRelationElderSiblingInLaw](cnlabelcontactrelationeldersiblinginlaw.md): The label for the contact’s elder sibling-in-law.
- [CNLabelContactRelationElderSisterInLaw](cnlabelcontactrelationeldersisterinlaw.md): The label for the contact’s elder sister-in-law.
- [CNLabelContactRelationFatherInLaw](cnlabelcontactrelationfatherinlaw.md): The label for the contact’s father-in-law.
- [CNLabelContactRelationFatherInLawHusbandsFather](cnlabelcontactrelationfatherinlawhusbandsfather.md): The label for the contact’s husband’s father.
- [CNLabelContactRelationFatherInLawOrStepfather](cnlabelcontactrelationfatherinlaworstepfather.md): The label for the contact’s father-in-law or stepfather.
- [CNLabelContactRelationFatherInLawWifesFather](cnlabelcontactrelationfatherinlawwifesfather.md): The label for the contact’s wife’s father.
- [CNLabelContactRelationMotherInLaw](cnlabelcontactrelationmotherinlaw.md): The label for the contact’s mother-in-law.
- [CNLabelContactRelationMotherInLawHusbandsMother](cnlabelcontactrelationmotherinlawhusbandsmother.md): The label for the contact’s husband’s mother.
- [CNLabelContactRelationMotherInLawOrStepmother](cnlabelcontactrelationmotherinlaworstepmother.md): The label for the contact’s mother-in-law or stepmother.
- [CNLabelContactRelationMotherInLawWifesMother](cnlabelcontactrelationmotherinlawwifesmother.md): The label for the contact’s wife’s mother.
- [CNLabelContactRelationParentInLaw](cnlabelcontactrelationparentinlaw.md): The label for the contact’s parent-in-law.
- [CNLabelContactRelationSiblingInLaw](cnlabelcontactrelationsiblinginlaw.md): The label for the contact’s sibling-in-law.
- [CNLabelContactRelationSisterInLaw](cnlabelcontactrelationsisterinlaw.md): The label for the contact’s sister-in-law.
- [CNLabelContactRelationSisterInLawBrothersWife](cnlabelcontactrelationsisterinlawbrotherswife.md): The label for the contact’s brother’s wife.
- [CNLabelContactRelationSisterInLawElderBrothersWife](cnlabelcontactrelationsisterinlawelderbrotherswife.md): The label for the contact’s elder brother’s wife.
- [CNLabelContactRelationSisterInLawHusbandsBrothersWife](cnlabelcontactrelationsisterinlawhusbandsbrotherswife.md): The label for the contact’s husband’s brother’s wife.
- [CNLabelContactRelationSisterInLawHusbandsSister](cnlabelcontactrelationsisterinlawhusbandssister.md): The label for the contact’s husband’s sister.
- [CNLabelContactRelationSisterInLawSpousesSister](cnlabelcontactrelationsisterinlawspousessister.md): The label for the contact’s spouse’s sister.
- [CNLabelContactRelationSisterInLawWifesBrothersWife](cnlabelcontactrelationsisterinlawwifesbrotherswife.md): The label for the contact’s wife’s brother’s wife.
- [CNLabelContactRelationSisterInLawWifesSister](cnlabelcontactrelationsisterinlawwifessister.md): The label for the contact’s wife’s sister.
- [CNLabelContactRelationSisterInLawYoungerBrothersWife](cnlabelcontactrelationsisterinlawyoungerbrotherswife.md): The label for the contact’s younger brother’s wife.
- [CNLabelContactRelationYoungerBrotherInLaw](cnlabelcontactrelationyoungerbrotherinlaw.md): The label for the contact’s younger brother-in-law.
- [CNLabelContactRelationYoungerSiblingInLaw](cnlabelcontactrelationyoungersiblinginlaw.md): The label for the contact’s younger sibling-in-law.
- [CNLabelContactRelationYoungerSisterInLaw](cnlabelcontactrelationyoungersisterinlaw.md): The label for the contact’s younger sister-in-law.

### Getting extended family relationship labels

- [CNLabelContactRelationAunt](cnlabelcontactrelationaunt.md): The label for the contact’s aunt.
- [CNLabelContactRelationAuntFathersBrothersWife](cnlabelcontactrelationauntfathersbrotherswife.md): The label for the contact’s father’s brother’s wife.
- [CNLabelContactRelationAuntFathersElderBrothersWife](cnlabelcontactrelationauntfatherselderbrotherswife.md): The label for the contact’s father’s elder brother’s wife.
- [CNLabelContactRelationAuntFathersElderSister](cnlabelcontactrelationauntfatherseldersister.md): The label for the contact’s father’s elder sister.
- [CNLabelContactRelationAuntFathersSister](cnlabelcontactrelationauntfatherssister.md): The label for the contact’s father’s sister.
- [CNLabelContactRelationAuntFathersYoungerBrothersWife](cnlabelcontactrelationauntfathersyoungerbrotherswife.md): The label for the contact’s father’s younger brother’s wife.
- [CNLabelContactRelationAuntFathersYoungerSister](cnlabelcontactrelationauntfathersyoungersister.md): The label for the contact’s father’s younger sister.
- [CNLabelContactRelationAuntMothersBrothersWife](cnlabelcontactrelationauntmothersbrotherswife.md): The label for the contact’s mother’s brother’s wife.
- [CNLabelContactRelationAuntMothersElderSister](cnlabelcontactrelationauntmotherseldersister.md): The label for the contact’s mother’s elder sister.
- [CNLabelContactRelationAuntMothersSister](cnlabelcontactrelationauntmotherssister.md): The label for the contact’s mother’s sister.
- [CNLabelContactRelationAuntMothersYoungerSister](cnlabelcontactrelationauntmothersyoungersister.md): The label for the contact’s mother’s younger sister.
- [CNLabelContactRelationAuntParentsElderSister](cnlabelcontactrelationauntparentseldersister.md): The label for the contact’s parent’s elder sister.
- [CNLabelContactRelationAuntParentsSister](cnlabelcontactrelationauntparentssister.md): The label for the contact’s parent’s sister.
- [CNLabelContactRelationAuntParentsYoungerSister](cnlabelcontactrelationauntparentsyoungersister.md): The label for the contact’s parent’s younger sister.
- [CNLabelContactRelationCousin](cnlabelcontactrelationcousin.md): The label for the contact’s cousin.
- [CNLabelContactRelationCousinFathersBrothersDaughter](cnlabelcontactrelationcousinfathersbrothersdaughter.md): The label for the contact’s father’s brother’s daughter.
- [CNLabelContactRelationCousinFathersBrothersSon](cnlabelcontactrelationcousinfathersbrothersson.md): The label for the contact’s father’s brother’s son.
- [CNLabelContactRelationCousinFathersSistersDaughter](cnlabelcontactrelationcousinfatherssistersdaughter.md): The label for the contact’s father’s sister’s daughter.
- [CNLabelContactRelationCousinFathersSistersSon](cnlabelcontactrelationcousinfatherssistersson.md): The label for the contact’s father’s sister’s son.
- [CNLabelContactRelationCousinGrandparentsSiblingsChild](cnlabelcontactrelationcousingrandparentssiblingschild.md): The label for the contact’s grandparent’s sibling’s child.
- [CNLabelContactRelationCousinGrandparentsSiblingsDaughter](cnlabelcontactrelationcousingrandparentssiblingsdaughter.md): The label for the contact’s grandparent’s sibling’s daughter.
- [CNLabelContactRelationCousinGrandparentsSiblingsSon](cnlabelcontactrelationcousingrandparentssiblingsson.md): The label for the contact’s grandparent’s sibling’s son.
- [CNLabelContactRelationCousinMothersBrothersDaughter](cnlabelcontactrelationcousinmothersbrothersdaughter.md): The label for the contact’s mother’s brother’s daughter.
- [CNLabelContactRelationCousinMothersBrothersSon](cnlabelcontactrelationcousinmothersbrothersson.md): The label for the contact’s mother’s brother’s son.
- [CNLabelContactRelationCousinMothersSistersDaughter](cnlabelcontactrelationcousinmotherssistersdaughter.md): The label for the contact’s mother’s sister’s daughter.
- [CNLabelContactRelationCousinMothersSistersSon](cnlabelcontactrelationcousinmotherssistersson.md): The label for the contact’s mother’s sister’s son.
- [CNLabelContactRelationCousinOrSiblingsChild](cnlabelcontactrelationcousinorsiblingschild.md): The label for the contact’s cousin’s or sibling’s child.
- [CNLabelContactRelationCousinParentsSiblingsChild](cnlabelcontactrelationcousinparentssiblingschild.md): The label for the contact’s parent’s sibling’s child.
- [CNLabelContactRelationCousinParentsSiblingsDaughter](cnlabelcontactrelationcousinparentssiblingsdaughter.md): The label for the contact’s parent’s sibling’s daughter.
- [CNLabelContactRelationCousinParentsSiblingsSon](cnlabelcontactrelationcousinparentssiblingsson.md): The label for the contact’s parent’s sibling’s son.
- [CNLabelContactRelationDaughterInLaw](cnlabelcontactrelationdaughterinlaw.md): The label for the contact’s daughter-in-law.
- [CNLabelContactRelationDaughterInLawOrSisterInLaw](cnlabelcontactrelationdaughterinlaworsisterinlaw.md): The label for the contact’s daughter-in-law or sister-in-law.
- [CNLabelContactRelationDaughterInLawOrStepdaughter](cnlabelcontactrelationdaughterinlaworstepdaughter.md): The label for the contact’s daughter-in-law or stepdaughter.
- [CNLabelContactRelationElderCousin](cnlabelcontactrelationeldercousin.md): The label for the contact’s elder cousin.
- [CNLabelContactRelationElderCousinFathersBrothersDaughter](cnlabelcontactrelationeldercousinfathersbrothersdaughter.md): The label for the contact’s father’s brother’s daughter.
- [CNLabelContactRelationElderCousinFathersBrothersSon](cnlabelcontactrelationeldercousinfathersbrothersson.md): The label for the contact’s father’s brother’s son.
- [CNLabelContactRelationElderCousinFathersSistersDaughter](cnlabelcontactrelationeldercousinfatherssistersdaughter.md): The label for the contact’s father’s sister’s daughter.
- [CNLabelContactRelationElderCousinFathersSistersSon](cnlabelcontactrelationeldercousinfatherssistersson.md): The label for the contact’s father’s sister’s son.
- [CNLabelContactRelationElderCousinMothersBrothersDaughter](cnlabelcontactrelationeldercousinmothersbrothersdaughter.md): The label for the contact’s mother’s brother’s daughter.
- [CNLabelContactRelationElderCousinMothersBrothersSon](cnlabelcontactrelationeldercousinmothersbrothersson.md): The label for the contact’s mother’s brother’s son.
- [CNLabelContactRelationElderCousinMothersSiblingsDaughterOrFathersSistersDaughter](cnlabelcontactrelationeldercousinmotherssiblingsdaughterorfatherssistersdaughter.md): The label for the contact’s mother’s sibling’s daughter or father’s sister’s daughter.
- [CNLabelContactRelationElderCousinMothersSiblingsSonOrFathersSistersSon](cnlabelcontactrelationeldercousinmotherssiblingssonorfatherssistersson.md): The label for the contact’s mother’s sibling’s son or father’s sister’s son.
- [CNLabelContactRelationElderCousinMothersSistersDaughter](cnlabelcontactrelationeldercousinmotherssistersdaughter.md): The label for the contact’s mother’s sister’s daughter.
- [CNLabelContactRelationElderCousinMothersSistersSon](cnlabelcontactrelationeldercousinmotherssistersson.md): The label for the contact’s mother’s sister’s son.
- [CNLabelContactRelationElderCousinParentsSiblingsDaughter](cnlabelcontactrelationeldercousinparentssiblingsdaughter.md): The label for the contact’s parent’s sibling’s daughter.
- [CNLabelContactRelationElderCousinParentsSiblingsSon](cnlabelcontactrelationeldercousinparentssiblingsson.md): The label for the contact’s parent’s sibling’s son.
- [CNLabelContactRelationFemaleCousin](cnlabelcontactrelationfemalecousin.md): The label for the contact’s female cousin.
- [CNLabelContactRelationGrandaunt](cnlabelcontactrelationgrandaunt.md): The label for the contact’s grandaunt.
- [CNLabelContactRelationGrandchild](cnlabelcontactrelationgrandchild.md): The label for the contact’s grandchild.
- [CNLabelContactRelationGrandchildOrSiblingsChild](cnlabelcontactrelationgrandchildorsiblingschild.md): The label for the contact’s grandchild or sibling’s child.
- [CNLabelContactRelationGranddaughter](cnlabelcontactrelationgranddaughter.md): The label for the contact’s granddaughter.
- [CNLabelContactRelationGranddaughterDaughtersDaughter](cnlabelcontactrelationgranddaughterdaughtersdaughter.md): The label for the contact’s daughter’s daughter.
- [CNLabelContactRelationGranddaughterSonsDaughter](cnlabelcontactrelationgranddaughtersonsdaughter.md): The label for the contact’s son’s daughter.
- [CNLabelContactRelationGranddaughterOrNiece](cnlabelcontactrelationgranddaughterorniece.md): The label for the contact’s granddaughter or niece.
- [CNLabelContactRelationGrandfather](cnlabelcontactrelationgrandfather.md): The label for the contact’s grandfather.
- [CNLabelContactRelationGrandfatherFathersFather](cnlabelcontactrelationgrandfatherfathersfather.md): The label for the contact’s father’s father.
- [CNLabelContactRelationGrandfatherMothersFather](cnlabelcontactrelationgrandfathermothersfather.md): The label for the contact’s mother’s father.
- [CNLabelContactRelationGrandmother](cnlabelcontactrelationgrandmother.md): The label for the contact’s grandmother.
- [CNLabelContactRelationGrandmotherFathersMother](cnlabelcontactrelationgrandmotherfathersmother.md): The label for the contact’s father’s mother.
- [CNLabelContactRelationGrandmotherMothersMother](cnlabelcontactrelationgrandmothermothersmother.md): The label for the contact’s mother’s mother.
- [CNLabelContactRelationGrandnephew](cnlabelcontactrelationgrandnephew.md): The label for the contact’s grandnephew.
- [CNLabelContactRelationGrandnephewBrothersGrandson](cnlabelcontactrelationgrandnephewbrothersgrandson.md): The label for the contact’s brother’s grandson.
- [CNLabelContactRelationGrandnephewSistersGrandson](cnlabelcontactrelationgrandnephewsistersgrandson.md): The label for the contact’s sister’s grandson.
- [CNLabelContactRelationGrandniece](cnlabelcontactrelationgrandniece.md): The label for the contact’s grandniece.
- [CNLabelContactRelationGrandnieceBrothersGranddaughter](cnlabelcontactrelationgrandniecebrothersgranddaughter.md): The label for the contact’s brother’s granddaughter.
- [CNLabelContactRelationGrandnieceSistersGranddaughter](cnlabelcontactrelationgrandniecesistersgranddaughter.md): The label for the contact’s sister’s granddaughter.
- [CNLabelContactRelationGrandparent](cnlabelcontactrelationgrandparent.md): The label for the contact’s grandparent.
- [CNLabelContactRelationGrandson](cnlabelcontactrelationgrandson.md): The label for the contact’s grandson.
- [CNLabelContactRelationGrandsonDaughtersSon](cnlabelcontactrelationgrandsondaughtersson.md): The label for the contact’s daughter’s son.
- [CNLabelContactRelationGrandsonSonsSon](cnlabelcontactrelationgrandsonsonsson.md): The label for the contact’s son’s son.
- [CNLabelContactRelationGrandsonOrNephew](cnlabelcontactrelationgrandsonornephew.md): The label for the contact’s grandson or nephew.
- [CNLabelContactRelationGranduncle](cnlabelcontactrelationgranduncle.md): The label for the contact’s granduncle.
- [CNLabelContactRelationGreatGrandchild](cnlabelcontactrelationgreatgrandchild.md): The label for the contact’s grandchild.
- [CNLabelContactRelationGreatGrandchildOrSiblingsGrandchild](cnlabelcontactrelationgreatgrandchildorsiblingsgrandchild.md): The label for the contact’s grandchild or sibling’s grandchild.
- [CNLabelContactRelationGreatGranddaughter](cnlabelcontactrelationgreatgranddaughter.md): The label for the contact’s great-granddaughter.
- [CNLabelContactRelationGreatGrandfather](cnlabelcontactrelationgreatgrandfather.md): The label for the contact’s great-grandfather.
- [CNLabelContactRelationGreatGrandmother](cnlabelcontactrelationgreatgrandmother.md): The label for the contact’s great-grandmother.
- [CNLabelContactRelationGreatGrandparent](cnlabelcontactrelationgreatgrandparent.md): The label for the contact’s great-grandparent.
- [CNLabelContactRelationGreatGrandson](cnlabelcontactrelationgreatgrandson.md): The label for the contact’s great-grandson.
- [CNLabelContactRelationMaleCousin](cnlabelcontactrelationmalecousin.md): The label for the contact’s male cousin.
- [CNLabelContactRelationNephew](cnlabelcontactrelationnephew.md): The label for the contact’s nephew.
- [CNLabelContactRelationNephewBrothersSon](cnlabelcontactrelationnephewbrothersson.md): The label for the contact’s brother’s son.
- [CNLabelContactRelationNephewBrothersSonOrHusbandsSiblingsSon](cnlabelcontactrelationnephewbrotherssonorhusbandssiblingsson.md): The label for the contact’s brother’s son or husband’s sibling’s son.
- [CNLabelContactRelationNephewOrCousin](cnlabelcontactrelationnepheworcousin.md): The label for the contact’s nephew or cousin.
- [CNLabelContactRelationNephewSistersSon](cnlabelcontactrelationnephewsistersson.md): The label for the contact’s sister’s son.
- [CNLabelContactRelationNephewSistersSonOrWifesSiblingsSon](cnlabelcontactrelationnephewsisterssonorwifessiblingsson.md): The label for the contact’s sister’s son or wife’s sibling’s son.
- [CNLabelContactRelationNiece](cnlabelcontactrelationniece.md): The label for the contact’s niece.
- [CNLabelContactRelationNieceBrothersDaughter](cnlabelcontactrelationniecebrothersdaughter.md): The label for the contact’s brother’s daughter.
- [CNLabelContactRelationNieceBrothersDaughterOrHusbandsSiblingsDaughter](cnlabelcontactrelationniecebrothersdaughterorhusbandssiblingsdaughter.md): The label for the contact’s brother’s daughter or husband’s sibling’s daughter.
- [CNLabelContactRelationNieceOrCousin](cnlabelcontactrelationnieceorcousin.md): The label for the contact’s niece or cousin.
- [CNLabelContactRelationNieceSistersDaughter](cnlabelcontactrelationniecesistersdaughter.md): The label for the contact’s sister’s daughter.
- [CNLabelContactRelationNieceSistersDaughterOrWifesSiblingsDaughter](cnlabelcontactrelationniecesistersdaughterorwifessiblingsdaughter.md): The label for the contact’s sister’s daughter or wife’s sibling’s daughter.
- [CNLabelContactRelationParentsElderSibling](cnlabelcontactrelationparentseldersibling.md): The label for the contact’s parent’s elder sibling.
- [CNLabelContactRelationParentsSibling](cnlabelcontactrelationparentssibling.md): The label for the contact’s parent’s sibling.
- [CNLabelContactRelationParentsSiblingFathersElderSibling](cnlabelcontactrelationparentssiblingfatherseldersibling.md): The label for the contact’s father’s elder sibling.
- [CNLabelContactRelationParentsSiblingFathersSibling](cnlabelcontactrelationparentssiblingfatherssibling.md): The label for the contact’s father’s sibling.
- [CNLabelContactRelationParentsSiblingFathersYoungerSibling](cnlabelcontactrelationparentssiblingfathersyoungersibling.md): The label for the contact’s father’s youngest sibling.
- [CNLabelContactRelationParentsSiblingMothersElderSibling](cnlabelcontactrelationparentssiblingmotherseldersibling.md): The label for the contact’s mother’s elder sibling.
- [CNLabelContactRelationParentsSiblingMothersSibling](cnlabelcontactrelationparentssiblingmotherssibling.md): The label for the contact’s mother’s sibling.
- [CNLabelContactRelationParentsSiblingMothersYoungerSibling](cnlabelcontactrelationparentssiblingmothersyoungersibling.md): The label for the contact’s mother’s younger sibling.
- [CNLabelContactRelationParentsYoungerSibling](cnlabelcontactrelationparentsyoungersibling.md): The label for the contact’s parent’s younger sibling.
- [CNLabelContactRelationSiblingsChild](cnlabelcontactrelationsiblingschild.md): The label for the contact’s sibling’s child.
- [CNLabelContactRelationSonInLaw](cnlabelcontactrelationsoninlaw.md): The label for the contact’s son-in-law.
- [CNLabelContactRelationSonInLawOrBrotherInLaw](cnlabelcontactrelationsoninlaworbrotherinlaw.md): The label for the contact’s son-in-law or brother-in-law.
- [CNLabelContactRelationSonInLawOrStepson](cnlabelcontactrelationsoninlaworstepson.md): The label for the contact’s son-in-law or stepson.
- [CNLabelContactRelationUncle](cnlabelcontactrelationuncle.md): The label for the contact’s uncle.
- [CNLabelContactRelationUncleFathersBrother](cnlabelcontactrelationunclefathersbrother.md): The label for the contact’s father’s brother.
- [CNLabelContactRelationUncleFathersElderBrother](cnlabelcontactrelationunclefatherselderbrother.md): The label for the contact’s father’s elder brother.
- [CNLabelContactRelationUncleFathersElderSistersHusband](cnlabelcontactrelationunclefatherseldersistershusband.md): The label for the contact’s elder sister’s husband.
- [CNLabelContactRelationUncleFathersSistersHusband](cnlabelcontactrelationunclefatherssistershusband.md): The label for the contact’s father’s sister’s husband.
- [CNLabelContactRelationUncleFathersYoungerBrother](cnlabelcontactrelationunclefathersyoungerbrother.md): The label for the contact’s father’s younger brother.
- [CNLabelContactRelationUncleFathersYoungerSistersHusband](cnlabelcontactrelationunclefathersyoungersistershusband.md): The label for the contact’s father’s younger sister’s husband.
- [CNLabelContactRelationUncleMothersBrother](cnlabelcontactrelationunclemothersbrother.md): The label for the contact’s mother’s brother.
- [CNLabelContactRelationUncleMothersElderBrother](cnlabelcontactrelationunclemotherselderbrother.md): The label for the contact’s mother’s elder brother.
- [CNLabelContactRelationUncleMothersSistersHusband](cnlabelcontactrelationunclemotherssistershusband.md): The label for the contact’s mother’s sister’s husband.
- [CNLabelContactRelationUncleMothersYoungerBrother](cnlabelcontactrelationunclemothersyoungerbrother.md): The label for the contact’s mother’s younger brother.
- [CNLabelContactRelationUncleParentsBrother](cnlabelcontactrelationuncleparentsbrother.md): The label for the contact’s parent’s brother.
- [CNLabelContactRelationUncleParentsElderBrother](cnlabelcontactrelationuncleparentselderbrother.md): The label for the contact’s parent’s elder brother.
- [CNLabelContactRelationUncleParentsYoungerBrother](cnlabelcontactrelationuncleparentsyoungerbrother.md): The label for the contact’s parent’s younger brother.
- [CNLabelContactRelationYoungerCousin](cnlabelcontactrelationyoungercousin.md): The label for the contact’s younger cousin.
- [CNLabelContactRelationYoungerCousinFathersBrothersDaughter](cnlabelcontactrelationyoungercousinfathersbrothersdaughter.md): The label for the contact’s father’s brother’s younger daughter.
- [CNLabelContactRelationYoungerCousinFathersBrothersSon](cnlabelcontactrelationyoungercousinfathersbrothersson.md): The label for the contact’s father’s brother’s younger son.
- [CNLabelContactRelationYoungerCousinFathersSistersDaughter](cnlabelcontactrelationyoungercousinfatherssistersdaughter.md): The label for the contact’s father’s sister’s younger daughter.
- [CNLabelContactRelationYoungerCousinFathersSistersSon](cnlabelcontactrelationyoungercousinfatherssistersson.md): The label for the contact’s father’s sister’s younger son.
- [CNLabelContactRelationYoungerCousinMothersBrothersDaughter](cnlabelcontactrelationyoungercousinmothersbrothersdaughter.md): The label for the contact’s mother’s brother’s younger daughter.
- [CNLabelContactRelationYoungerCousinMothersBrothersSon](cnlabelcontactrelationyoungercousinmothersbrothersson.md): The label for the contact’s mother’s brother’s younger son.
- [CNLabelContactRelationYoungerCousinMothersSiblingsDaughterOrFathersSistersDaughter](cnlabelcontactrelationyoungercousinmotherssiblingsdaughterorfatherssistersdaughter.md): The label for the contact’s mother’s sibling’s younger daughter or father’s sister’s younger daughter.
- [CNLabelContactRelationYoungerCousinMothersSiblingsSonOrFathersSistersSon](cnlabelcontactrelationyoungercousinmotherssiblingssonorfatherssistersson.md): The label for the contact’s mother’s sibling’s younger son or father’s sister’s younger son.
- [CNLabelContactRelationYoungerCousinMothersSistersDaughter](cnlabelcontactrelationyoungercousinmotherssistersdaughter.md): The label for the contact’s mother’s sister’s younger daughter.
- [CNLabelContactRelationYoungerCousinMothersSistersSon](cnlabelcontactrelationyoungercousinmotherssistersson.md): The label for the contact’s mother’s sister’s younger son.
- [CNLabelContactRelationYoungerCousinParentsSiblingsDaughter](cnlabelcontactrelationyoungercousinparentssiblingsdaughter.md): The label for the contact’s parent’s sibling’s younger daughter.
- [CNLabelContactRelationYoungerCousinParentsSiblingsSon](cnlabelcontactrelationyoungercousinparentssiblingsson.md): The label for the contact’s parent’s sibling’s younger son.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Generic Types

- [CNContactProperty](cncontactproperty.md): An object that represents a property of a contact.
