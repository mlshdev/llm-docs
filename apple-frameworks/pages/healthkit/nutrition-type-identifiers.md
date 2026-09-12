> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/nutrition-type-identifiers](https://developer.apple.com/documentation/healthkit/nutrition-type-identifiers)

# Nutrition Type Identifiers (Swift)

**Framework:** HealthKit  
**Kind:** API Collection

Type identifiers used for tracking diet and nutrition.

<a id="overview"></a>

## Overview

Nutritional data can be broadly categorized into two main groups:

- Macronutrients consumed in large quantities, such as fats, carbohydrates, and proteins.
- Micronutrients consumed in smaller quantities, such as vitamins and minerals.

HealthKit also provides type identifiers for nutrition-related items that users may want to track, like water or caffeine.

You do not need to track all nutritional information; you can focus on the items of interest to your users. In general, the data from nutrition labels is a good place to start. Many countries and regions require a nutrition label on packaged food. While the contents of these labels vary from one country or region to another, they typically include the nutritional data represented by these properties:

- [dietaryEnergyConsumed](hkquantitytypeidentifier/dietaryenergyconsumed.md)
- [dietaryFatTotal](hkquantitytypeidentifier/dietaryfattotal.md)
- [dietaryFatSaturated](hkquantitytypeidentifier/dietaryfatsaturated.md)
- [dietaryCholesterol](hkquantitytypeidentifier/dietarycholesterol.md)
- [dietaryCarbohydrates](hkquantitytypeidentifier/dietarycarbohydrates.md)
- [dietaryFiber](hkquantitytypeidentifier/dietaryfiber.md)
- [dietarySugar](hkquantitytypeidentifier/dietarysugar.md)
- [dietaryProtein](hkquantitytypeidentifier/dietaryprotein.md)
- [dietaryCalcium](hkquantitytypeidentifier/dietarycalcium.md)
- [dietaryIron](hkquantitytypeidentifier/dietaryiron.md)
- [dietaryPotassium](hkquantitytypeidentifier/dietarypotassium.md)
- [dietarySodium](hkquantitytypeidentifier/dietarysodium.md)
- [dietaryVitaminA](hkquantitytypeidentifier/dietaryvitamina.md)
- [dietaryVitaminC](hkquantitytypeidentifier/dietaryvitaminc.md)
- [dietaryVitaminD](hkquantitytypeidentifier/dietaryvitamind.md)

<a id="Combine-Nutritional-Samples"></a>

### Combine Nutritional Samples

Macronutrient identifiers can be thought of as a hierarchy. The [dietaryEnergyConsumed](hkquantitytypeidentifier/dietaryenergyconsumed.md) identifier represents the total amount of energy from all fats, carbohydrates, and protein. You can provide a detailed breakdown using the [dietaryFatTotal](hkquantitytypeidentifier/dietaryfattotal.md), [dietaryCarbohydrates](hkquantitytypeidentifier/dietarycarbohydrates.md), and [dietaryProtein](hkquantitytypeidentifier/dietaryprotein.md) identifiers. Fats can be further separated into [dietaryFatMonounsaturated](hkquantitytypeidentifier/dietaryfatmonounsaturated.md), [dietaryFatPolyunsaturated](hkquantitytypeidentifier/dietaryfatpolyunsaturated.md), and [dietaryFatSaturated](hkquantitytypeidentifier/dietaryfatsaturated.md). Carbohydrates can be identified as [dietaryFiber](hkquantitytypeidentifier/dietaryfiber.md) and [dietarySugar](hkquantitytypeidentifier/dietarysugar.md).

Unless your app is very focused (for example, tracking only sugar or saturated fat), always provide the total data ([dietaryFatTotal](hkquantitytypeidentifier/dietaryfattotal.md) or [dietaryCarbohydrates](hkquantitytypeidentifier/dietarycarbohydrates.md)), and then optionally provide the more detailed information using the subcategories. You do not need to provide data for all of the subcategories; however, the sum of the subcategory sample values should be equal or less than the total sample’s value.

> **Note**

>  The [dietaryEnergyConsumed](hkquantitytypeidentifier/dietaryenergyconsumed.md) samples are handled differently than the other macronutrients. While it can be seen as a total value,  [dietaryEnergyConsumed](hkquantitytypeidentifier/dietaryenergyconsumed.md) is measured in calories or kilojoules, while the individual macronutrient samples are measured by mass.

## Topics

### Essentials

- [food](hkcorrelationtypeidentifier/food.md): Food correlation types combine any number of nutritional samples into a single food object.
- [HKMetadataKeyFoodType](hkmetadatakeyfoodtype.md): The type of food that the HealthKit object represents.

### Macronutrients

- [dietaryEnergyConsumed](hkquantitytypeidentifier/dietaryenergyconsumed.md): A quantity sample type that measures the amount of energy consumed.
- [dietaryCarbohydrates](hkquantitytypeidentifier/dietarycarbohydrates.md): A quantity sample type that measures the amount of carbohydrates consumed.
- [dietaryFiber](hkquantitytypeidentifier/dietaryfiber.md): A quantity sample type that measures the amount of fiber consumed.
- [dietarySugar](hkquantitytypeidentifier/dietarysugar.md): A quantity sample type that measures the amount of sugar consumed.
- [dietaryFatTotal](hkquantitytypeidentifier/dietaryfattotal.md): A quantity sample type that measures the total amount of fat consumed.
- [dietaryFatMonounsaturated](hkquantitytypeidentifier/dietaryfatmonounsaturated.md): A quantity sample type that measures the amount of monounsaturated fat consumed.
- [dietaryFatPolyunsaturated](hkquantitytypeidentifier/dietaryfatpolyunsaturated.md): A quantity sample type that measures the amount of polyunsaturated fat consumed.
- [dietaryFatSaturated](hkquantitytypeidentifier/dietaryfatsaturated.md): A quantity sample type that measures the amount of saturated fat consumed.
- [dietaryCholesterol](hkquantitytypeidentifier/dietarycholesterol.md): A quantity sample type that measures the amount of cholesterol consumed.
- [dietaryProtein](hkquantitytypeidentifier/dietaryprotein.md): A quantity sample type that measures the amount of protein consumed.

### Vitamins

- [dietaryVitaminA](hkquantitytypeidentifier/dietaryvitamina.md): A quantity sample type that measures the amount of vitamin A consumed.
- [dietaryThiamin](hkquantitytypeidentifier/dietarythiamin.md): A quantity sample type that measures the amount of thiamin (vitamin B1) consumed.
- [dietaryRiboflavin](hkquantitytypeidentifier/dietaryriboflavin.md): A quantity sample type that measures the amount of riboflavin (vitamin B2) consumed.
- [dietaryNiacin](hkquantitytypeidentifier/dietaryniacin.md): A quantity sample type that measures the amount of niacin (vitamin B3) consumed.
- [dietaryPantothenicAcid](hkquantitytypeidentifier/dietarypantothenicacid.md): A quantity sample type that measures the amount of pantothenic acid (vitamin B5) consumed.
- [dietaryVitaminB6](hkquantitytypeidentifier/dietaryvitaminb6.md): A quantity sample type that measures the amount of pyridoxine (vitamin B6) consumed.
- [dietaryBiotin](hkquantitytypeidentifier/dietarybiotin.md): A quantity sample type that measures the amount of biotin (vitamin B7) consumed.
- [dietaryVitaminB12](hkquantitytypeidentifier/dietaryvitaminb12.md): A quantity sample type that measures the amount of cyanocobalamin (vitamin B12) consumed.
- [dietaryVitaminC](hkquantitytypeidentifier/dietaryvitaminc.md): A quantity sample type that measures the amount of vitamin C consumed.
- [dietaryVitaminD](hkquantitytypeidentifier/dietaryvitamind.md): A quantity sample type that measures the amount of vitamin D consumed.
- [dietaryVitaminE](hkquantitytypeidentifier/dietaryvitamine.md): A quantity sample type that measures the amount of vitamin E consumed.
- [dietaryVitaminK](hkquantitytypeidentifier/dietaryvitamink.md): A quantity sample type that measures the amount of vitamin K consumed.
- [dietaryFolate](hkquantitytypeidentifier/dietaryfolate.md): A quantity sample type that measures the amount of folate (folic acid) consumed.

### Minerals

- [dietaryCalcium](hkquantitytypeidentifier/dietarycalcium.md): A quantity sample type that measures the amount of calcium consumed.
- [dietaryChloride](hkquantitytypeidentifier/dietarychloride.md): A quantity sample type that measures the amount of chloride consumed.
- [dietaryIron](hkquantitytypeidentifier/dietaryiron.md): A quantity sample type that measures the amount of iron consumed.
- [dietaryMagnesium](hkquantitytypeidentifier/dietarymagnesium.md): A quantity sample type that measures the amount of magnesium consumed.
- [dietaryPhosphorus](hkquantitytypeidentifier/dietaryphosphorus.md): A quantity sample type that measures the amount of phosphorus consumed.
- [dietaryPotassium](hkquantitytypeidentifier/dietarypotassium.md): A quantity sample type that measures the amount of potassium consumed.
- [dietarySodium](hkquantitytypeidentifier/dietarysodium.md): A quantity sample type that measures the amount of sodium consumed.
- [dietaryZinc](hkquantitytypeidentifier/dietaryzinc.md): A quantity sample type that measures the amount of zinc consumed.

### Hydration

- [dietaryWater](hkquantitytypeidentifier/dietarywater.md): A quantity sample type that measures the amount of water consumed.

### Caffeination

- [dietaryCaffeine](hkquantitytypeidentifier/dietarycaffeine.md): A quantity sample type that measures the amount of caffeine consumed.

### Ultratrace Minerals

- [dietaryChromium](hkquantitytypeidentifier/dietarychromium.md): A quantity sample type that measures the amount of chromium consumed.
- [dietaryCopper](hkquantitytypeidentifier/dietarycopper.md): A quantity sample type that measures the amount of copper consumed.
- [dietaryIodine](hkquantitytypeidentifier/dietaryiodine.md): A quantity sample type that measures the amount of iodine consumed.
- [dietaryManganese](hkquantitytypeidentifier/dietarymanganese.md): A quantity sample type that measures the amount of manganese consumed.
- [dietaryMolybdenum](hkquantitytypeidentifier/dietarymolybdenum.md): A quantity sample type that measures the amount of molybdenum consumed.
- [dietarySelenium](hkquantitytypeidentifier/dietaryselenium.md): A quantity sample type that measures the amount of selenium consumed.

# Nutrition Type Identifiers (Objective-C)

**Framework:** HealthKit  
**Kind:** API Collection

Type identifiers used for tracking diet and nutrition.

<a id="overview"></a>

## Overview

Nutritional data can be broadly categorized into two main groups:

- Macronutrients consumed in large quantities, such as fats, carbohydrates, and proteins.
- Micronutrients consumed in smaller quantities, such as vitamins and minerals.

HealthKit also provides type identifiers for nutrition-related items that users may want to track, like water or caffeine.

You do not need to track all nutritional information; you can focus on the items of interest to your users. In general, the data from nutrition labels is a good place to start. Many countries and regions require a nutrition label on packaged food. While the contents of these labels vary from one country or region to another, they typically include the nutritional data represented by these properties:

- [HKQuantityTypeIdentifierDietaryEnergyConsumed](hkquantitytypeidentifier/dietaryenergyconsumed.md)
- [HKQuantityTypeIdentifierDietaryFatTotal](hkquantitytypeidentifier/dietaryfattotal.md)
- [HKQuantityTypeIdentifierDietaryFatSaturated](hkquantitytypeidentifier/dietaryfatsaturated.md)
- [HKQuantityTypeIdentifierDietaryCholesterol](hkquantitytypeidentifier/dietarycholesterol.md)
- [HKQuantityTypeIdentifierDietaryCarbohydrates](hkquantitytypeidentifier/dietarycarbohydrates.md)
- [HKQuantityTypeIdentifierDietaryFiber](hkquantitytypeidentifier/dietaryfiber.md)
- [HKQuantityTypeIdentifierDietarySugar](hkquantitytypeidentifier/dietarysugar.md)
- [HKQuantityTypeIdentifierDietaryProtein](hkquantitytypeidentifier/dietaryprotein.md)
- [HKQuantityTypeIdentifierDietaryCalcium](hkquantitytypeidentifier/dietarycalcium.md)
- [HKQuantityTypeIdentifierDietaryIron](hkquantitytypeidentifier/dietaryiron.md)
- [HKQuantityTypeIdentifierDietaryPotassium](hkquantitytypeidentifier/dietarypotassium.md)
- [HKQuantityTypeIdentifierDietarySodium](hkquantitytypeidentifier/dietarysodium.md)
- [HKQuantityTypeIdentifierDietaryVitaminA](hkquantitytypeidentifier/dietaryvitamina.md)
- [HKQuantityTypeIdentifierDietaryVitaminC](hkquantitytypeidentifier/dietaryvitaminc.md)
- [HKQuantityTypeIdentifierDietaryVitaminD](hkquantitytypeidentifier/dietaryvitamind.md)

<a id="Combine-Nutritional-Samples"></a>

### Combine Nutritional Samples

Macronutrient identifiers can be thought of as a hierarchy. The [HKQuantityTypeIdentifierDietaryEnergyConsumed](hkquantitytypeidentifier/dietaryenergyconsumed.md) identifier represents the total amount of energy from all fats, carbohydrates, and protein. You can provide a detailed breakdown using the [HKQuantityTypeIdentifierDietaryFatTotal](hkquantitytypeidentifier/dietaryfattotal.md), [HKQuantityTypeIdentifierDietaryCarbohydrates](hkquantitytypeidentifier/dietarycarbohydrates.md), and [HKQuantityTypeIdentifierDietaryProtein](hkquantitytypeidentifier/dietaryprotein.md) identifiers. Fats can be further separated into [HKQuantityTypeIdentifierDietaryFatMonounsaturated](hkquantitytypeidentifier/dietaryfatmonounsaturated.md), [HKQuantityTypeIdentifierDietaryFatPolyunsaturated](hkquantitytypeidentifier/dietaryfatpolyunsaturated.md), and [HKQuantityTypeIdentifierDietaryFatSaturated](hkquantitytypeidentifier/dietaryfatsaturated.md). Carbohydrates can be identified as [HKQuantityTypeIdentifierDietaryFiber](hkquantitytypeidentifier/dietaryfiber.md) and [HKQuantityTypeIdentifierDietarySugar](hkquantitytypeidentifier/dietarysugar.md).

Unless your app is very focused (for example, tracking only sugar or saturated fat), always provide the total data ([HKQuantityTypeIdentifierDietaryFatTotal](hkquantitytypeidentifier/dietaryfattotal.md) or [HKQuantityTypeIdentifierDietaryCarbohydrates](hkquantitytypeidentifier/dietarycarbohydrates.md)), and then optionally provide the more detailed information using the subcategories. You do not need to provide data for all of the subcategories; however, the sum of the subcategory sample values should be equal or less than the total sample’s value.

> **Note**

>  The [HKQuantityTypeIdentifierDietaryEnergyConsumed](hkquantitytypeidentifier/dietaryenergyconsumed.md) samples are handled differently than the other macronutrients. While it can be seen as a total value,  [HKQuantityTypeIdentifierDietaryEnergyConsumed](hkquantitytypeidentifier/dietaryenergyconsumed.md) is measured in calories or kilojoules, while the individual macronutrient samples are measured by mass.

## Topics

### Essentials

- [HKCorrelationTypeIdentifierFood](hkcorrelationtypeidentifier/food.md): Food correlation types combine any number of nutritional samples into a single food object.
- [HKMetadataKeyFoodType](hkmetadatakeyfoodtype.md): The type of food that the HealthKit object represents.

### Macronutrients

- [HKQuantityTypeIdentifierDietaryEnergyConsumed](hkquantitytypeidentifier/dietaryenergyconsumed.md): A quantity sample type that measures the amount of energy consumed.
- [HKQuantityTypeIdentifierDietaryCarbohydrates](hkquantitytypeidentifier/dietarycarbohydrates.md): A quantity sample type that measures the amount of carbohydrates consumed.
- [HKQuantityTypeIdentifierDietaryFiber](hkquantitytypeidentifier/dietaryfiber.md): A quantity sample type that measures the amount of fiber consumed.
- [HKQuantityTypeIdentifierDietarySugar](hkquantitytypeidentifier/dietarysugar.md): A quantity sample type that measures the amount of sugar consumed.
- [HKQuantityTypeIdentifierDietaryFatTotal](hkquantitytypeidentifier/dietaryfattotal.md): A quantity sample type that measures the total amount of fat consumed.
- [HKQuantityTypeIdentifierDietaryFatMonounsaturated](hkquantitytypeidentifier/dietaryfatmonounsaturated.md): A quantity sample type that measures the amount of monounsaturated fat consumed.
- [HKQuantityTypeIdentifierDietaryFatPolyunsaturated](hkquantitytypeidentifier/dietaryfatpolyunsaturated.md): A quantity sample type that measures the amount of polyunsaturated fat consumed.
- [HKQuantityTypeIdentifierDietaryFatSaturated](hkquantitytypeidentifier/dietaryfatsaturated.md): A quantity sample type that measures the amount of saturated fat consumed.
- [HKQuantityTypeIdentifierDietaryCholesterol](hkquantitytypeidentifier/dietarycholesterol.md): A quantity sample type that measures the amount of cholesterol consumed.
- [HKQuantityTypeIdentifierDietaryProtein](hkquantitytypeidentifier/dietaryprotein.md): A quantity sample type that measures the amount of protein consumed.

### Vitamins

- [HKQuantityTypeIdentifierDietaryVitaminA](hkquantitytypeidentifier/dietaryvitamina.md): A quantity sample type that measures the amount of vitamin A consumed.
- [HKQuantityTypeIdentifierDietaryThiamin](hkquantitytypeidentifier/dietarythiamin.md): A quantity sample type that measures the amount of thiamin (vitamin B1) consumed.
- [HKQuantityTypeIdentifierDietaryRiboflavin](hkquantitytypeidentifier/dietaryriboflavin.md): A quantity sample type that measures the amount of riboflavin (vitamin B2) consumed.
- [HKQuantityTypeIdentifierDietaryNiacin](hkquantitytypeidentifier/dietaryniacin.md): A quantity sample type that measures the amount of niacin (vitamin B3) consumed.
- [HKQuantityTypeIdentifierDietaryPantothenicAcid](hkquantitytypeidentifier/dietarypantothenicacid.md): A quantity sample type that measures the amount of pantothenic acid (vitamin B5) consumed.
- [HKQuantityTypeIdentifierDietaryVitaminB6](hkquantitytypeidentifier/dietaryvitaminb6.md): A quantity sample type that measures the amount of pyridoxine (vitamin B6) consumed.
- [HKQuantityTypeIdentifierDietaryBiotin](hkquantitytypeidentifier/dietarybiotin.md): A quantity sample type that measures the amount of biotin (vitamin B7) consumed.
- [HKQuantityTypeIdentifierDietaryVitaminB12](hkquantitytypeidentifier/dietaryvitaminb12.md): A quantity sample type that measures the amount of cyanocobalamin (vitamin B12) consumed.
- [HKQuantityTypeIdentifierDietaryVitaminC](hkquantitytypeidentifier/dietaryvitaminc.md): A quantity sample type that measures the amount of vitamin C consumed.
- [HKQuantityTypeIdentifierDietaryVitaminD](hkquantitytypeidentifier/dietaryvitamind.md): A quantity sample type that measures the amount of vitamin D consumed.
- [HKQuantityTypeIdentifierDietaryVitaminE](hkquantitytypeidentifier/dietaryvitamine.md): A quantity sample type that measures the amount of vitamin E consumed.
- [HKQuantityTypeIdentifierDietaryVitaminK](hkquantitytypeidentifier/dietaryvitamink.md): A quantity sample type that measures the amount of vitamin K consumed.
- [HKQuantityTypeIdentifierDietaryFolate](hkquantitytypeidentifier/dietaryfolate.md): A quantity sample type that measures the amount of folate (folic acid) consumed.

### Minerals

- [HKQuantityTypeIdentifierDietaryCalcium](hkquantitytypeidentifier/dietarycalcium.md): A quantity sample type that measures the amount of calcium consumed.
- [HKQuantityTypeIdentifierDietaryChloride](hkquantitytypeidentifier/dietarychloride.md): A quantity sample type that measures the amount of chloride consumed.
- [HKQuantityTypeIdentifierDietaryIron](hkquantitytypeidentifier/dietaryiron.md): A quantity sample type that measures the amount of iron consumed.
- [HKQuantityTypeIdentifierDietaryMagnesium](hkquantitytypeidentifier/dietarymagnesium.md): A quantity sample type that measures the amount of magnesium consumed.
- [HKQuantityTypeIdentifierDietaryPhosphorus](hkquantitytypeidentifier/dietaryphosphorus.md): A quantity sample type that measures the amount of phosphorus consumed.
- [HKQuantityTypeIdentifierDietaryPotassium](hkquantitytypeidentifier/dietarypotassium.md): A quantity sample type that measures the amount of potassium consumed.
- [HKQuantityTypeIdentifierDietarySodium](hkquantitytypeidentifier/dietarysodium.md): A quantity sample type that measures the amount of sodium consumed.
- [HKQuantityTypeIdentifierDietaryZinc](hkquantitytypeidentifier/dietaryzinc.md): A quantity sample type that measures the amount of zinc consumed.

### Hydration

- [HKQuantityTypeIdentifierDietaryWater](hkquantitytypeidentifier/dietarywater.md): A quantity sample type that measures the amount of water consumed.

### Caffeination

- [HKQuantityTypeIdentifierDietaryCaffeine](hkquantitytypeidentifier/dietarycaffeine.md): A quantity sample type that measures the amount of caffeine consumed.

### Ultratrace Minerals

- [HKQuantityTypeIdentifierDietaryChromium](hkquantitytypeidentifier/dietarychromium.md): A quantity sample type that measures the amount of chromium consumed.
- [HKQuantityTypeIdentifierDietaryCopper](hkquantitytypeidentifier/dietarycopper.md): A quantity sample type that measures the amount of copper consumed.
- [HKQuantityTypeIdentifierDietaryIodine](hkquantitytypeidentifier/dietaryiodine.md): A quantity sample type that measures the amount of iodine consumed.
- [HKQuantityTypeIdentifierDietaryManganese](hkquantitytypeidentifier/dietarymanganese.md): A quantity sample type that measures the amount of manganese consumed.
- [HKQuantityTypeIdentifierDietaryMolybdenum](hkquantitytypeidentifier/dietarymolybdenum.md): A quantity sample type that measures the amount of molybdenum consumed.
- [HKQuantityTypeIdentifierDietarySelenium](hkquantitytypeidentifier/dietaryselenium.md): A quantity sample type that measures the amount of selenium consumed.
