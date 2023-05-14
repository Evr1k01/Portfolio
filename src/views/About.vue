<template>
  <home-bar></home-bar>

  <v-main>
    <v-container class="fill-height d-flex" fluid>
      <v-row justify="center">

        <v-col cols="12" sm="10" md="8" lg="4" class="mt-5 mt-sm-0">
          <!-- General Information -->
          <v-card
              class="mx-auto"
          >
            <v-card-text>
              <div>Part #1</div>
              <p class="text-h4 text--primary">General information <v-icon>mdi-account</v-icon></p>
              <p>Information:</p>
              <div class="text--primary">
                <v-row>
                  <v-col cols="8">
                    Basic information that gives a general idea ...
                  </v-col>
                </v-row>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                  variant="text"
                  color="teal-accent-4"
                  @click="reveal.data[4] = true"
              >
                Learn More
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <v-card
                  v-if="reveal.data[4]"
                  class="v-card__reveal"
                  style="height: 100%;"
              >
                <v-card-text class="pb-0">
                  <v-row>
                    <v-col cols="3" class="d-block d-sm-none d-lg-block" lg="4">
                      <v-img class="home__logo-mini" :src="avatar"></v-img>
                    </v-col>
                    <v-col cols="9" sm="12" lg="8">
                      As mentioned above, my name is Maxim. I was born in February 2002 in a small
                      town in northern Kazakhstan. I have spent almost all my life there.
                      I lived in Almaty for two years, and now I have been living in Germany for a year.
                      I am quite cheerful and goal-oriented.
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-actions class="pt-0">
                  <v-btn
                      variant="text"
                      color="teal-accent-4"
                      @click="reveal.data[4] = false"
                  >
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-expand-transition>
          </v-card>
        </v-col>

        <v-col cols="12" sm="10" md="8" lg="4" class="mt-5 mt-sm-0">
          <!-- Education -->
          <v-card
              class="mx-auto"
          >
            <v-card-text>
              <div>Part #2</div>
              <p class="text-h4 text--primary">Education <v-icon>mdi-school-outline</v-icon></p>
              <p>Information:</p>
              <div class="text--primary">
                <v-row>
                  <v-col cols="8">
                    My learning journey started in 2008, in the first year of school...
                  </v-col>
                </v-row>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                  variant="text"
                  color="teal-accent-4"
                  @click="reveal.data[0] = true"
              >
                Learn More
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <v-card
                  v-if="reveal.data[0]"
                  class="v-card__reveal"
                  style="height: 100%;"
              >
                <v-card-text class="pb-0">
                  <p><v-icon>mdi-arrow-right-thin</v-icon> In <span class="home__card-title-span-bold">2013</span>, I enrolled in a lyceum in my town, where I stayed until graduation. </p>
                  <p><v-icon>mdi-arrow-right-thin</v-icon> In <span class="home__card-title-span-bold">2019</span>, I graduated from school in Kazakhstan, with pretty good results, and enrolled at the Kazakh-German University. </p>
                  <p><v-icon>mdi-arrow-right-thin</v-icon> In <span class="home__card-title-span-bold">2022</span>, I went to Germany on a dual degree programme, which I am currently studying. </p>
                </v-card-text>
                <v-card-actions class="pt-0">
                  <v-btn
                      variant="text"
                      color="teal-accent-4"
                      @click="reveal.data[0] = false"
                  >
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-expand-transition>
          </v-card>
        </v-col>

        <v-col cols="12" sm="10" md="8" lg="4">
          <!-- Work experience -->
          <v-card
              class="mx-auto"
          >
            <v-card-text>
              <div>Part #3</div>
              <p class="text-h4 text--primary">Working experience <v-icon>mdi-laptop</v-icon></p>
              <p>Information:</p>
              <div class="text--primary">
                <v-row>
                  <v-col cols="8">
                    My first and current job is as a web developer in Almaty ...
                  </v-col>
                </v-row>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                  variant="text"
                  color="teal-accent-4"
                  @click="reveal.data[1] = true"
              >
                Learn More
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <v-card
                  v-if="reveal.data[1]"
                  class="v-card__reveal"
                  style="height: 100%;"
              >
                <v-card-text class="pb-0">
                  <p>
                    I work as a full-stark developer in a small company.
                    Most of the time I use php (e.g. Laravel framework).
                    For front-end I mostly use javascript based framework (Vue.js).
                    I also work with TypeScript and various preprocessors for css (like sass).
                  </p>
                  <p>
                    I am currently creating and maintaining existing projects (e.g. logistics software or for restaurants).
                  </p>
                </v-card-text>
                <v-card-actions class="pt-0">
                  <v-btn
                      variant="text"
                      color="teal-accent-4"
                      @click="reveal.data[1] = false"
                  >
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-expand-transition>
          </v-card>
        </v-col>

        <v-col cols="12" sm="10" md="8" lg="4">
          <v-card
              class="mx-auto"
          >
            <v-card-text>
              <div>Part #4</div>
              <p class="text-h4 text--primary">Skills <v-icon>mdi-web</v-icon></p>
              <p>Information:</p>
              <div class="text--primary">
                <v-row>
                  <v-col cols="8">
                    There are a few things I have learned in my modest experience ...
                  </v-col>
                </v-row>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                  variant="text"
                  color="teal-accent-4"
                  @click="reveal.data[2] = true"
              >
                Learn More
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <v-card
                  v-if="reveal.data[2]"
                  class="v-card__reveal"
                  style="height: 100%;"
              >
                <v-card-text class="pb-0">
                  <p><v-icon>mdi-arrow-right-thin</v-icon> <span class="home__card-title-span-bold">Programming languages: </span> PHP, JavaScript, TypeScript, Python, Java </p>
                  <p><v-icon>mdi-arrow-right-thin</v-icon> <span class="home__card-title-span-bold">Databases: </span> MySql, MsSql, CouchDB </p>
                  <p><v-icon>mdi-arrow-right-thin</v-icon> <span class="home__card-title-span-bold">Operating Systems: </span> Windows 10, prevail: Linux (Ubuntu, Fedora, PopOS), MacOS </p>
                  <p><v-icon>mdi-arrow-right-thin</v-icon> <span class="home__card-title-span-bold">Natural languages: </span> Russian (native language), German (B2.2-C1), English B1.2</p>
                  <p><v-icon>mdi-arrow-right-thin</v-icon> <span class="home__card-title-span-bold">Soft-skills: </span> Communicability, punctuality, responsibility  </p>
                </v-card-text>
                <v-card-actions class="pt-0">
                  <v-btn
                      variant="text"
                      color="teal-accent-4"
                      @click="reveal.data[2] = false"
                  >
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-expand-transition>
          </v-card>
        </v-col>

        <v-col cols="12" sm="10" md="8" lg="4">
          <v-card
              class="mx-auto"
          >
            <v-card-text>
              <div>Part #5</div>
              <p class="text-h4 text--primary">Hobbies <v-icon>mdi-bicycle</v-icon></p>
              <p>Information:</p>
              <div class="text--primary">
                <v-row>
                  <v-col cols="8">
                    There are a number of things that interest me ...
                  </v-col>
                </v-row>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                  variant="text"
                  color="teal-accent-4"
                  @click="reveal.data[3] = true"
              >
                Learn More
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <v-card
                  v-if="reveal.data[3]"
                  class="v-card__reveal"
                  style="height: 100%;"
              >
                <v-card-text class="pb-0">
                  <p><v-icon>mdi-arrow-right-thin</v-icon> Interested in new technology </p>
                  <p><v-icon>mdi-arrow-right-thin</v-icon> I respect sport </p>
                  <p><v-icon>mdi-arrow-right-thin</v-icon> Prefer scientific, psychological and science-fiction literature </p>
                  <p><v-icon>mdi-arrow-right-thin</v-icon> Interested in architecture </p>
                </v-card-text>
                <v-card-actions class="pt-0">
                  <v-btn
                      variant="text"
                      color="teal-accent-4"
                      @click="reveal.data[3] = false"
                  >
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import HomeBar from "@/components/AppBar.vue";
import avatar from '../assets/photos/avatar.jpg'
import {ref} from "vue";

export default {
  name: "About",
  components: {HomeBar},
  data:() => ({
    HomeBar,
    avatar,
  }),

  setup(){
    const reveal = ref({
      data: [false, false, false, false, false]
    });

    return{
      reveal,
    }
  }
}
</script>

<style scoped>

</style>