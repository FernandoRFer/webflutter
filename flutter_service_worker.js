'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "bd2bbc6a97078c4a81e961609072d2bc",
".git/config": "567718f36082bd09ed3388253ff3dfa7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0ac9c159eab812d9e42f20129644e2a8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ef1f7f2618eb961170f478c60df43f5e",
".git/logs/refs/heads/main": "eedfadcbc6e135589dea25e2c6ffbafa",
".git/logs/refs/remotes/origin/main": "a19b797712e89929db397efbf8db622e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/8d244949503baceca10fd41b1b968408c970ad": "49475acff68ca49ef45afb6406c7e9cb",
".git/objects/07/cca278042f0258964d8a919303a92c05a5bb51": "93abd9f8f343c4d72e22723defb49998",
".git/objects/09/24de8a1b6a7ed4187d062efdc761f6cbd2522f": "786796f60459d41e817423c9b438e411",
".git/objects/0b/eef711e66efe6bc33bdbf437001a52b7ae2de6": "b9fe076b2347f9e332316c58d70beeea",
".git/objects/0c/d0206fcff8ce91a2822ef996d7cf0f7f2b78e4": "0527e365c33e8cd1d6441245f08afe7e",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/ffcf4164cec9ed4fad569628ceff2aa9943d8f": "414d622090544699b2250a2796e50824",
".git/objects/13/48231d43b254589041f95096343ee8c8eaab54": "569d52b5ba904f5ebde028c4eda763b7",
".git/objects/13/52352acb3f4fa365cbc0d951fa28303b70f5b6": "3a8e3cb7c4b54ae636ff7b99a551c45c",
".git/objects/14/95417e3d5dea3b9a543eb0cb397fbba6fbcbf3": "cccef2a29e408f36777fa0e4e5e0a2f8",
".git/objects/16/5d3ae10e9b5c8f10799d63cda283836792b581": "e122ce7bc6b18ffd6f85925e60f217ff",
".git/objects/1a/6f8e2655964d335b8fcb7bd92e1b939fdadf88": "89ae92cfbec8f57989594895beb99e65",
".git/objects/1e/1a665779e13f8443a4de02de18ff7dce423fee": "3c93c1fb57460c17b98e12f0718e0a33",
".git/objects/21/8a6ad71729bf38fb1226a115475881cfb6b627": "911f5e9730738ded10060b15b7c9f2c2",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2f/988045d2d2056faca13067869d89427dff5399": "3fa17011ad0fa20f733007e75994c688",
".git/objects/2f/c406914bf545b59aae75360704588b5c189a7a": "a710fe60671f762e7bf854538a017546",
".git/objects/34/8080ee3bfef2d34afd83de916d3ac843ac3898": "85b2b39e8fafb9b37873f2cace52a789",
".git/objects/36/56c65a8c230e26187f1016ac9743c91328bd6c": "583cf7f457df1f7caa96e127fe9a92d8",
".git/objects/37/c80d340e3e9e4ad9aacd02fe9bd81543f5cf86": "2c2760112444fa8d9d55a0fa29372fc6",
".git/objects/38/cbb3a14f72166b365540eccb4933f3b9581986": "34466ee89af1569fe2a963583bae619d",
".git/objects/3b/d12260372bd9b2988d9fa36d4a3ff423d12a45": "59dfc310ff89914780682da88f620698",
".git/objects/3e/0506d3220597e1b45c2385948ea113d2033310": "8fdc7cf296764e5e90b0e8348c6367aa",
".git/objects/3f/b13ed6d8431da15ae9ecbec5263247336f82ea": "97b098d3ebb92d3608bd45c36362e290",
".git/objects/44/1443165599ad1f595c2eb205fa7ca4ed837de4": "c2358755c13cd1c0386b57d2de788049",
".git/objects/44/b0c228d38b8db814235cf44ea45fb088f0a3e3": "787f3840df6a6f57031a8b013804785b",
".git/objects/44/bf1c876255ef9877d379cb114b643723ae2e75": "ddcbaab39165c52d224314db56138b63",
".git/objects/46/43129fa6fb08abbcd508295490bf5ea5872a87": "87843e14dd93271e22321d0ae997063b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/19a03d30aee1a39452dc641be8edc27b5bc7ff": "5e41c4f3279f1777738ef4d9ba2187a9",
".git/objects/47/6e182f635c28c6f8e7ebba58e76eeec537901a": "abc07e9395d7f3b6098744d764c1eb32",
".git/objects/4d/845664cacbf80419240e0b985e206327c228bd": "7643cba679fa50b4dd8c51ffc340a3dd",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/1c459c88727453162f131c6d35e142a4c845c0": "717c88eebf5110174924c1cbab45f9f8",
".git/objects/4f/d71999debfd10ee507371b40d4892b857c7262": "88ab66312d9b44b69556ec7475b3c678",
".git/objects/53/f20b50ce42580a73072f64c1c8c23f4a50811a": "fda4fceabbd44e3c9fc0dd9e5dc51b6e",
".git/objects/54/5723d76334a368d87c68a2eb1deaa518ccb46e": "d79f331aea286b598222a5804831b405",
".git/objects/55/1f33404e67ae51da542d684be3a0d57c94f1d1": "77eeba43600943d41441a0037189133e",
".git/objects/58/69a922fd42f647703b016b5aa7a12ee65c42d0": "23299ab047f9404614fef7d8c8a58897",
".git/objects/58/a5eb5a49e826046711f1dcef8d477a16427361": "62e4d95cdc8c40ef344f2336e85edcb0",
".git/objects/58/ed77f25e73a2f1b0973cdf4e25d7ddd7eefd4e": "eb0b5af5c5917770f7f19a9a86bda4b0",
".git/objects/5a/c8a91f6ea61a60fd478d17fb86df5765192181": "987722e45fb042d81da929fb4572e5f6",
".git/objects/5d/2b2855200232b2ba4d850d842028d470bfb5b2": "6a9c62484fdd2ebffc26791c563d3351",
".git/objects/5e/e15218076cb552c7afc78e7e835094c711f102": "60bb954ad3931d779fa91d1ca4277416",
".git/objects/61/695236d1ed8297e7c27921301c3724f02d8676": "22317ed4109bb1109d19fd1ebef94ff4",
".git/objects/63/61eb1ff783b0c4f8e806902353c4cdcc80535d": "0c634cb351dc732e70d8fd5ef22c440c",
".git/objects/64/e606ee0a8ec2d36b01b3548203eb9438cce718": "075fb9215481e9129cd9515dfac09e95",
".git/objects/64/fbb8213b186c0650c4a90d93c8185940d2e6a9": "d2662361448394837b0a72960eceb993",
".git/objects/65/96e1783045c0d00761ced0be6ac034cf281e78": "dec6552b9c6bce2ac9715b7c30474e84",
".git/objects/66/7e5c7cfe77d64fe5eff9fc8d59f1af112fa32a": "99ef126d6048d6d6347704a06838784d",
".git/objects/69/33fce9ebf71a253366962022ce7e076a89e4f7": "0ac09f848bf2cc424e4c95651784be2c",
".git/objects/69/eb6ab4cbe040bac0b69352e0dda7a0b7134439": "0f9d9cb154105b5d85e64861ec723092",
".git/objects/6a/008757b95b18c21124f9aafb2e30a86c6eb1fe": "8660a3ab113af40b63ea6a8089c4e49d",
".git/objects/6a/7650aef6cd92c989d9c933d6f1b86bf4aeeb1a": "c84d12993a211fb48750e27a03b874df",
".git/objects/6b/fa6533c4fed62618696295930f4f779e20e2fd": "0557a2a88b75861fb43cf3ce755f3684",
".git/objects/6c/328d3c49f69bd5edcaa276d2048c0c82ee039b": "3c1817c404a64aa4c293332a9ec53f0e",
".git/objects/6e/4afdbe1b6219e9ef438863e1d8ba2161c091d0": "4a27b6bd53411b9dda2b0dd49237194c",
".git/objects/71/a8d9fbe713b7c9b73d308487bfba5e47ceb46d": "8932df0a03b299c1263152a1c132f7c6",
".git/objects/76/76173dfd30ae6b9d18479ed0e1e0b347811595": "cf489dc5000331d1e7beefd979847920",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/fb370551d13dd68945f882a212fef5ed15eaae": "5c5281e7017e85991d2a46e08cf0238f",
".git/objects/77/19e1bba53bb1456c74356a123377cbfa32b787": "6348df3b3ff689858b21e977a89c5091",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/80/c5c32a0924fe7c42d581ebe08c3640017ee374": "0b5f7b8dce6e61a8e00bf12c7a217d94",
".git/objects/80/f1fa6f119956ecdd16928c287746f8dcc4d441": "1cfe02892d5e16918367f61bea7611a5",
".git/objects/81/b73642ffab3d005ee3cce606a46e423c093d0d": "965a82ab02b84d6a80502b6d342cbac5",
".git/objects/82/6b29f9645d0283b3415fdf39a171bdce8ea813": "4596c366fefbb98181bce75b424d2b85",
".git/objects/82/ac087d2ea5a7b3f7321937e959fa3ce3a3c157": "cb143c72441f75cbf8307c9c19bf7f7f",
".git/objects/82/ce03785bd192abb34778e94efe61de1173bf5c": "3d1718593243e0d65c4c64e90271cf8d",
".git/objects/86/7b9549a8defe9c0e021617bdeefbf4172c11d0": "b093dd9f565d1036c255c26d065a0472",
".git/objects/87/4ec5de4b407fc0bd1a2ae5717ddaa3419173bd": "37aadc5d372aa191949f0f47d74bc9bc",
".git/objects/88/b4fac2494af456ca8098d08fcdf85723042a7a": "deedf4c5309d86ba95daa4ffd5916e7f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/d2d4a32af6221c00c0b01dc23bce286c648cdb": "c6aec90a999e43be009d472c812e2e6e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/708656ff91d8a8440f14e4f1ef6bf884340283": "5ab6ce042da5dd1ecd1fc48cba056c06",
".git/objects/8e/d02483001d776355f945c3c421d66940647ed9": "53fb6d734c155fff1ceb3f211c372f57",
".git/objects/91/d2b6a275483d95167465343529ded673f6fb04": "5ab85ca821192684a1c8cac00c3db941",
".git/objects/94/b4e399a04b56a929d77d78f67a480cd03eff91": "313ab9d0d57551f5e3f7fddcc77b48a6",
".git/objects/95/f63fdcce4967d7ddfad053eee9be2b1db95ce8": "165274bb2401d21fe6494b9f608baade",
".git/objects/98/d80420ad9f8c3274221edc98c7c519cd7937bd": "6c3683732b33f4de872b8f90e9b00dea",
".git/objects/9d/40b47c9f142c5967a2d13ef892572bc119f295": "1b7debe3114272095e81ae7218d34aca",
".git/objects/9d/45b608cbb6a60031aff52a6d22aea57c8819c0": "0632494bc20a3772d4c18ee55f3daace",
".git/objects/9d/fd3e1d03fb3a6f6ddc84767fa33c5bb5e1db1d": "5b31867cd213896982fde1358c173672",
".git/objects/9e/c45476c7ac755386edd6dbce2322cf684b7afc": "6a64d0b85f62e7354554fb66f53ebda4",
".git/objects/9f/4392091de212370f3079ff63461974db013ced": "de835609299e14ef4680b6f75fb6499c",
".git/objects/9f/49deec936e82d4b3092fa45c1c9868ca54ca02": "16dd0750dd442af5e0ff09635030e5c6",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/45cfacc333fa77d6f6a86879b5b698ee546f46": "5ca9a52abf26a1002de951ef8dc3467d",
".git/objects/a2/bb34444df757f0054a809c12d1041f5f93dbfc": "4abf4fb33ebc472621c94774ae576e85",
".git/objects/a2/bdc654e17fcb75ae6da1cf9bacd0e8d4b0bcee": "8e40d7eb84c7fef06f96676fdfcb936b",
".git/objects/a2/dbc7e7e48c75c3742c98b6f882014527578174": "532abe393a382bce99590acf37354bee",
".git/objects/a7/77ab66c53c69d9fb9fab7c6f008860fdfce975": "c67f2d1856be2dd25e2bde7900a72650",
".git/objects/a7/c75b31b78b75e156c74b6c432d4ec069021c65": "e3b0fc4b0900c4f725c616ed67bbf30c",
".git/objects/a8/38bcab1160d0e9eb8774448d4e92107ad3f178": "27b7c5175583e29da65023c0ebba3a68",
".git/objects/a9/213644987be825ba79937e69693e138f909075": "334c787ff2273a4e3a3a02c9af4ff7f0",
".git/objects/a9/537ab56a8e64ab3d7205a2f4f1f2f4eb2015bd": "83de0f3c4f824cdeb4ae8bc6fd8d5927",
".git/objects/a9/7b359d3f9ac0b9186baa24a2b754b50257fc55": "5e4827a8ff7993571af7866e0a33c093",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/1c3400c3cca11e6bf4e1e81901428a40eac515": "8f05db2f538ae6ad46c2d232aef295c2",
".git/objects/af/59ec56004e434e997b3e4ee745168bd8d1e7ce": "3c88cf6d29d7f0972a4fff8310d5a4be",
".git/objects/b4/581d4de063eaba7ae8e63313c258122f80ef6f": "61587a08d2c5939e57a233a14b548278",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/b5145459c361120f2811739dc72e307f41cbac": "af1bb5f061fcf9cd8a0c43debcf6cac0",
".git/objects/bc/1d2c6f446643ebefc40e77c5463b33df56de10": "ea68174e60f795f65bdab231435408a1",
".git/objects/bc/acd7de8b5e38de09c9dad0a2e0d1884d9a5434": "95ff929e7158fe5e957f47f4adae8ee3",
".git/objects/c1/53cd6c23a7d7c951f36356e09db7e7e1511840": "6a97837c78ba4907d987301460ff4a99",
".git/objects/c2/9ebd8cfe586e484cfb2a821cc047133941d784": "cd4849451f23169a038dafa5e2cbb18a",
".git/objects/c2/e5ee44c1a6a016e31116729ccfc9ef4de925b7": "0192ba32d115d2cf78f85096a0b8d8d4",
".git/objects/c8/834257f10144e5c553e3dbb6af76e7f67f1a63": "15d33985eaa60e431aa65fb75f158a28",
".git/objects/c8/8ee24c1f6ad677ac94b27f2a67479529477531": "e7a099bca139c3b24c89303ef73351fa",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cf/85d5a3b58ce73b7a251c88dedeeac5bc9cc733": "4cde44534d837c67e37e5af4bb5e7235",
".git/objects/cf/98ddd5b847f01de8893feb2a9d5f47796a43f3": "71c7e9734ad2dea7093e31efb9a98a72",
".git/objects/d0/b905181e07f4f69db09426467bf73dcee8056e": "8b40b003316fee3f9d532357334aa1c3",
".git/objects/d3/1ef3a84810a8475e69d27d0e008b5ba04281b9": "8c65f3037c1ff7c77b730e8ef54d7a6c",
".git/objects/d4/dc7dfddf00da081d8d8c27d156e7b0ef5a9b9d": "255056567bf761b5871b243900e7924a",
".git/objects/d5/d52c87a16c12d5721dc3587536995021ec9cf3": "d0e49c58234eab82b8bd157876390d53",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/cfb50aaf753b0dc5af42e689b0d9c608c8861c": "5257e106359996bca1d94136b063705b",
".git/objects/da/1ac77dfe1ed59b990c2219f921ddaa25e6256a": "225ad1d22af3c799aec6e2b8ec85dc5b",
".git/objects/da/d3c5e490722721a9e223d40d2ddf297a130997": "68adadf325d73e719c8fa956a802673d",
".git/objects/dc/22152790d9cdc97a01169ad7aa0ed51d5a49ff": "d92770dab290aa681a169188388c3f4f",
".git/objects/dd/4d64e572a0d4ffac32e581240c6b8373033887": "76869547995698fb87bd427a622d1dee",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e2/98320968007ebb7d73a55e60f9af96b90964b8": "4c6b7559d31bb9243238c268788be6c9",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/02541bf41a7434806ea2f1d1a3b69e0359edef": "d4ce35c54f9704dbce7167a0c74ab0ae",
".git/objects/e7/7f03928a4f412c91923b61f4fde9149ceed6da": "0ff7e6d4a92db2185210aa2e9d18fa94",
".git/objects/e8/242e4840fcde30176201ea8415b67dc1e2e432": "fa1e00f94ab25ad29ed6d6dac78ba6b3",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/c24d75b3e63f34ca47aca2b706d5f59e875af1": "8558189f302a97ee0d2914493b60214a",
".git/objects/eb/3e3f0d06792a4885ecbc1023ec5814a9597f3e": "149fd5f396cdb73e83cc01e12a4dd05a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/ceb12c79c467fc9abd33a2ed58e197d2baf904": "491c487ff59a02dc6d495cb16e0ac656",
".git/objects/ed/e24e5a596bc1a2a53d967115372316758fb7c1": "ae4cc3dce7bd69d91c991cb8ab227411",
".git/objects/ef/d8e62a95f44244e3b97701b7f2c5071904b560": "a0f070a48676ee34af6a9cbc3f2bb94d",
".git/objects/f0/8ea755cd3ca457606d8165127b10924a9b5b99": "83c50659d808af0be29bdd35b88f6d83",
".git/objects/f1/18154a4dc89fef0a5c98852b55e6f5b1bd5087": "51ee6737515673addb9e2d9cb6580bd5",
".git/objects/f1/d4865bbeea1465667499af53c6260fcd3254c8": "c70d5ed7f27e7e361948e2078bad4f4c",
".git/objects/f5/345232708eaaa464f0c125aa235596508b32be": "5d65e26bdf4cb8f12db5d1293f94c10e",
".git/objects/f7/33a6cd683ce9d87f2f34e3eed9b03279b1c598": "421bab818c43a895de3b23e53ac14af9",
".git/objects/f9/65a0b42e972689752d05ef78ce3d1470431cc1": "34bfef5b2d55512bb0cf9e3633d30fed",
".git/objects/fd/b74e45885b708bc24b5d452ac753a918f04b4f": "78c72a3bac6d4faf3c101708ca8f8119",
".git/objects/fd/ff366126b32f044b400e89a43164221cceddd1": "0e06c31c874c9fed4f1284d422a7b1f9",
".git/ORIG_HEAD": "cb2e6ca189e14f10ecac51569d1a6059",
".git/refs/heads/main": "cb2e6ca189e14f10ecac51569d1a6059",
".git/refs/remotes/origin/main": "cb2e6ca189e14f10ecac51569d1a6059",
"assets/AssetManifest.json": "b695c28b36ef2051521bd14a9e8f7303",
"assets/assets/api_Logo.png": "38598c46ab174db17fd7687a67ec52ad",
"assets/assets/Bd_Logo.png": "7e075bf9adfb671587f7dd76bb4bb460",
"assets/assets/Csharp_Logo.png": "db57839e40e03bd671375bc623b9b4cf",
"assets/assets/Dart_Logo.png": "9ca03b2ba3f2995f6f8d5c760294e087",
"assets/assets/email_logo.png": "eb7e902ad140286730925bbe370ada7b",
"assets/assets/Flutter_Logo.png": "b36c58c1f2e860299dbaae8e030a85bb",
"assets/assets/foto.jpg": "a107d215af0638407f3615d932a18ca6",
"assets/assets/fundo.jpg": "be16c68d4b01943faaef6974481076da",
"assets/assets/githubbranco.png": "8568666357cb44e8ebd376b0d81ae847",
"assets/assets/GitHub_Logo.png": "1d626624f9aa72d8d04d2983151e6765",
"assets/assets/linkedin.png": "3017ae54755ac48f9585bac8b01fdf15",
"assets/assets/logolinkedin.png": "6b11303872207d20218914041afa21ed",
"assets/assets/logowhatsappbranco.png": "f43755c648afa7724dce05c894bc1ac1",
"assets/assets/Whatsapp.png": "3650f49a9d501efa6b62c1c08f714d16",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/imagens/fundo.jpg": "98754214baaeeedf55b1b65fe82d1ffc",
"assets/NOTICES": "9777980696669aab915e1a940fc766c2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "766c8cc582887d79fd06bb0d7caf09e0",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "b04d9d5bd1907321a10dd817f4836381",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "b04d9d5bd1907321a10dd817f4836381",
"icons/Icon-512.png": "b04d9d5bd1907321a10dd817f4836381",
"icons/Icon-maskable-192.png": "b04d9d5bd1907321a10dd817f4836381",
"icons/Icon-maskable-512.png": "b04d9d5bd1907321a10dd817f4836381",
"index.html": "08efddabdca711144480a9450079c60e",
"/": "08efddabdca711144480a9450079c60e",
"main.dart.js": "de5a9e9db9814600b75495d8678e3c30",
"manifest.json": "9727dde90aa820b7aa416212dd6616de",
"version.json": "061068e2c9bf138d06622981ae841092"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
